import React from "react";
import { Link } from "react-router-dom";

import AppsIcon from "@material-ui/icons/Apps";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";

import Search from "../components/Search/Search";
import "./Search.css";

function SearchResult(props) {
  return (
    <div className="search_result">
      <div className="search_header">
        <div className="search_header_left">
          <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" />
          <div className="input_container">
            <Search hideButtons/>
          </div>
        </div>
        <div className="search_header_right">
          <AppsIcon />
          <Avatar />
        </div>
      </div>

      <div className="search_body">
        Search Body
      </div>
    </div>
  );
}

export default SearchResult;
