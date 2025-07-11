import React from "react";
import NavBar from "./NavBar";

const AddGroceryItem = () => {
  return (
    <div>
        <NavBar />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row">
              <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                <label htmlFor="" className="form-label">
                  Item Name
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                <label htmlFor="" className="form-label">
                  Quantity
                </label>
                <input type="number" name="" id="" className="form-control" />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                <label htmlFor="" className="form-label">
                  Category Name
                </label>
                <select name="" id="" className="form-control">
                  <option value="Fruits">Fruits</option>
                  <option value="Vegetables">Vegetables</option>
                  <option value="Snacks">Snacks</option>
                  <option value="Dairy">Dairy</option>
                </select>
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                <label htmlFor="" className="form-control">
                  Expiry Date
                </label>
                <input type="date" name="" id="" className="form-control" />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                <label htmlFor="" className="form-label">
                  Price
                </label>
                <input type="number" name="" id="" className="form-control" />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                <label htmlFor="" className="form-label">
                  Item Image
                </label>
                <input type="file" name="" id="" className="form-control" />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                <button className="btn btn-success">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddGroceryItem;
