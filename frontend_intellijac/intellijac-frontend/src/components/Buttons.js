//import * as React from 'react';
//
//
//export default function Buttons(props) {
//return (
//<div className="row">
//<div className="col-md-12 text-center" style={{marginTop: "30px"}}>
//<button className="btn btn-primary" style={{marginTop: "30px"}} onClick={props.login}>Login</button>
//<button className="btn btn-dark" style={{marginTop: "30px"}} onClick={props.logout}>Logout</button>
//</div>
//</div>
//
//);
//};

import React from 'react';
import { Link } from 'react-router-dom';

export default function Buttons(props) {
  return (
    <div className="row">
      <div className="col-md-12 text-center" style={{ marginTop: "30px", position: "fixed", bottom: "210px", left: "100", width: "100%", backgroundColor: "#f8f8f8", padding: "30px" }}>
        <Link to="/login" className="btn btn-primary" style={{ marginTop: "30px" }}>
          Login
        </Link>
        <button className="btn btn-dark" style={{ marginTop: "30px", marginLeft: "10px" }} onClick={props.logout}>
          Logout
        </button>
      </div>
    </div>
  );
}
