import React from "react";
import { useNavigate } from "react-router-dom";

export default function UserLogin() {
    const navigate =useNavigate();
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-md-8 ">
            <h2 className="display-4">Login</h2>
            <div className="formbrd border border-primary border-2 rounded mt-5">
              <div className="row">
                <div className="col-md-2 "></div>
                <div className="col-md-8 ">
                  <form action="" className="align-items-center">
                    <input
                      type="text"
                      className="form-control mt-5 w-100 "
                      placeholder="Username "
                    />
                    <input
                      type="password"
                      className="form-control mt-5"
                      placeholder="Password "
                    />
                    <div className="btn btn-outline-success mt-5 btn-sm w-50 mb-5" onClick={()=>navigate('/index')}>Login</div>
                  </form>
                </div>
                <div className="col-md-2 "></div>
              </div>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </div>
  );
}
