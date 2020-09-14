import React from 'react';
import { Link } from 'react-router-dom';

import AppsIcon from '@material-ui/icons/Apps';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';

import Search from '../components/Search/Search'
import './Home.css'

function Home(props) {
    return (
      <div className="home">
        <div className="home_header">
          <div className="home_header_left">
            <Link to="/about">About</Link>
            <Link to="/about">Store</Link>
          </div>
          <div className="home_header_right">
            <Link to="/about">Gmail</Link>
            <Link to="/about">Images</Link>
            <AppsIcon />
            <Avatar />
          </div>
        </div>

        <div className="home_body">
          <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" />
          <div className='input_container'>
            <Search/>
          </div>
        </div>
      </div>
    );
}

export default Home;