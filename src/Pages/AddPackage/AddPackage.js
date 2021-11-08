import React from 'react';

const AddPackage = () => {
    return (
        <div className="container my-5">
            <form>
                <h2 className="text-primary">Add a Package</h2>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleInputName" aria-describedby="nameHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputImage" className="form-label">Image</label>
                    <input type="text" className="form-control" id="exampleInputImage" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputDescription" className="form-label">Description</label>
                    <input type="text" className="form-control" id="exampleInputDescription" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPrice" className="form-label">Price</label>
                    <input type="text" className="form-control" id="exampleInputPrice" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default AddPackage;