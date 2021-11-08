import React, { useEffect, useState } from 'react';
import Speciality from '../Speciality/Speciality';

const Specialities = () => {
    // set specialities
    const [specialities, setSpecialities] = useState([]);

    // load specialities info 
    useEffect(() => {
        fetch('https://stark-sierra-09024.herokuapp.com/speciality')
            .then(res => res.json())
            .then(data => setSpecialities(data))
    }, [])

    return (
        <div>
            {/* specialities container  */}
            <div className="container">

                {/* specialities heading  */}
                <h2 className="text-center pt-5">Why Choose Us</h2>
                <p className="text-center text-muted">Here are reasons you should plan trip with us</p>

                {/* display specialities */}
                <div className="row row-cols-lg-3 row-cols-md-3 row-cols-sm-1 row-cols-1 my-5">
                    {
                        specialities.map(speciality => <Speciality
                            key={speciality.key}
                            speciality={speciality}
                        >
                        </Speciality>
                        )
                    }
                </div>
            </div>
        </div >
    );
};

export default Specialities;