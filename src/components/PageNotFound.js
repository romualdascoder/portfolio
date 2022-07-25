import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/PageNotFound.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle as farQuestionCircle } from "@fortawesome/free-regular-svg-icons";

function PageNotFound() {
  let location = useLocation();
  return (
    <div>
      <div className="errorContainer">
        <div className="error">
          <p>4</p>
          <FontAwesomeIcon icon={farQuestionCircle} className={"fa-spin"} />
          <p>4</p>
        </div>
        <div className="errorMessage">
          <p>OOPS, {location.pathname} puslapis nerastas!</p>
          <p>
            Eikite į <Link to="/">Pradžia</Link> puslapį.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
