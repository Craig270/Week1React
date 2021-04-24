import React from "react";

export default class Form extends React.Component {
  render() {
    return (
      <div>
        <form id="loginpg">
          <div className="container" id="info">
            <div classname="form row">
              <h3 class="text-info">Login below here:</h3>
            </div>
            <div classname="form-row">
              <div classname="col-md-4">
                <input
                  type="text"
                  classname="form-control"
                  placeholder="Username"
                />
              </div>
              <div classname="col-md-4">
                <input
                  type="text"
                  classname="form control"
                  placeholder="Password"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
