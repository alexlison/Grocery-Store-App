import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import axios from "axios";

const ViewItem = () => {
  const [ItemData, ChangeData] = useState({
    products: []
  });

  const fetchedData = () => {
    axios.get("https://dummyjson.com/products/category/groceries").then(
      (response) => {
        ChangeData(response.data)

      }
    ).catch()
  }

  useEffect(() => { fetchedData() },[] )
  return (
    <div>
      <NavBar />
      <div className="container">
        <h4 className="mt-4">View All Items</h4>
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              {ItemData.products.map((value,index) => {
                return (
                  <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                    <div class="card">
                      <img
                        src={value.images}
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                        <h5 class="card-title">{value.title}</h5>
                        <p class="card-text">
                          {value.description}
                        </p>
                            <p class="card-text"> Price:
                          {value.price}
                        </p>
                        <a href="#" class="btn btn-primary">
                          Buy Now
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewItem;
