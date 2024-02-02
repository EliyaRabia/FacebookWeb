import React from 'react';
import "./LoginPage.css";

function LoginPage() {
  return (
    <div class="container px-4 text-center">
      <div class="col-4">
        <div class="Login">
          <div class="input-group flex-nowrap p-2">
            <input
              type="text"
              class="form-control"
              placeholder="email or phone number"
              aria-label="Username"
              aria-describedby="addon-wrapping"
            ></input>
          </div>
          <div class="input-group flex-nowrap p-2">
            <input
              type="text"
              class="form-control"
              placeholder="password"
              aria-label="Password"
              aria-describedby="addon-wrapping"
            ></input>
          </div>
          <button type="button" class="btn btn-primary p-2 signIn">
            Sign in
          </button>
          <hr class="hrSize"></hr>
          <button type="button" class="btn btn-primary p-2 m-2 signUp">
            Sign up
          </button>
        </div>
      </div>

      <div class="col-6">
        <div class="introduction">
          <h1>Facebook</h1>
          <p>
            Facebook allows you to connect and share together <br></br>
            with the people in your life.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
