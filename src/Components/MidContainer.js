import React from "react";
import { Link } from "react-router-dom";

export default function MidContainer() {
  return (
    <div classNameName="container myContainer">
      <div className="types container  ">
        <div className="row d-flex tcol">
          <div className="col-sm-12 col-md-6 col-lg-4 tpecol">
            <div className="innerbox text-center d-flex flex-column justify-content-center">
              <h4 className="text-center ">
                <strong>INDIAN FOOD</strong>
              </h4>
              <img className="img-fluid" src="images/Indian-Food.png" />
              <Link className="seemore" to="/IndianFood">
                See more{" "}
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </Link>
            </div>
          </div>

          <div className="container col-sm-12 col-md-6 col-lg-4 tpecol">
            <div className="innerbox text-center d-flex flex-column justify-content-center">
              <h4 className="text-center ">
                <strong>CHINESE FOOD</strong>
              </h4>
              <img className="img-fluid" src="images/chinesefood.png" />
              <Link className="seemore" to="/CHINESE">
                See more{" "}
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 tpecol">
            <div className="innerbox text-center d-flex flex-column         justify-content-center">
              <h4 className=" text-center">
                <strong>CONTINENTAL </strong>
              </h4>
              <img className="img-fluid" src="images/conten.jpg" />
              <Link className="seemore" to="/CONTINENTAL">
                See more{" "}
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </Link>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-4 tpecol">
            <div className="innerbox text-center d-flex flex-column justify-content-center">
              <h4 className="text-center ">
                <strong>GERMAN FOOD</strong>
              </h4>
              <img className="img-fluid" src="images/german.jpg" />
              <Link className="seemore" to="/GERMAN">
                See more{" "}
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 tpecol">
            <div className="innerbox text-center d-flex flex-column justify-content-center">
              <h4 className="text-center ">
                <strong>KOREAN FOOD</strong>
              </h4>
              <img className="img-fluid" src="images/Korean-Food.jpg" />
              <Link className="seemore" to="/KOREAN">
                See more{" "}
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 tpecol">
            <div className="innerbox text-center d-flex flex-column justify-content-center">
              <h4 className=" text-center">
                <strong>MEXICAN FOOD</strong>
              </h4>
              <img className="img-fluid" src="images/mexicanfood.jpg" />
              <Link className="seemore" to="/MEXICAN">
                See more{" "}
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
