import React from 'react';

const Banner = () => {

    //home banner image link 
    const banner1 = 'https://i.ibb.co/0QHP3NH/bannner-1-2.jpg';
    const banner2 = 'https://i.ibb.co/TK2NFWg/banner-2-1.jpg';
    const banner3 = 'https://i.ibb.co/K7wVFZT/banner-3.jpg';
    const banner4 = 'https://i.ibb.co/VvdW1sQ/banner-4.jpg';
    const banner5 = 'https://i.ibb.co/Z1j8ydR/banner-5.jpg';

    return (
        <div className="mb-5">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={banner1} className="d-block w-100" alt="banner-1" />
                    </div>
                    <div className="carousel-item">
                        <img src={banner2} className="d-block w-100" alt="banner-2" />
                    </div>
                    <div className="carousel-item">
                        <img src={banner3} className="d-block w-100" alt="banner-3" />
                    </div>
                    <div className="carousel-item">
                        <img src={banner4} className="d-block w-100" alt="banner-4" />
                    </div>
                    <div className="carousel-item">
                        <img src={banner5} className="d-block w-100" alt="banner-5" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>

    );
};

export default Banner;