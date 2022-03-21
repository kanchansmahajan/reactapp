import React from "react";
<button class="btn btn-outline-success" type="submit">Login\Register</button>
function Loginreg() {
  return (
      <div className="loginner">
          <div className="loginmain container">
        <div className="login container">
            <div className="heding">
                <center><h5>Login</h5></center>
            </div>
        <div class="mb-3 row">
        <label for="staticEmail"  class="col-sm-2 lable1 ">
          Email
        </label>
        <div class=" col1">
          <input
            type="text"
            readonly
            class="form-control-plaintext"
            id="staticEmail"
            value="email@example.com"
          />
        </div>
        <div/>
      <div class="mb-3 row">
        <label for="inputPassword" class="col-sm-2 label2 col-form-label">
          Password
        </label>
        <div class="col2">
          <input type="password" class="form-control" id="inputPassword" />
        </div>
      </div>
    </div>
     
    </div>
      </div>
      </div>
      
   
  );
}

export default Loginreg;
