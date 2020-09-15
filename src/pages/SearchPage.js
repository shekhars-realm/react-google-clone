import React from 'react';
import './SearchPage.css'
import Search from '../components/Search/Search'
import {useStateValue} from '../StateProvider'
import {Link} from 'react-router-dom'
import useGoogleSearch from '../useGoogleSearch';

import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/Search";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const SearchPage = () => {

    const [{term}, dispatch] = useStateValue()
    const {data} = useGoogleSearch(term)

    console.log(data)

    return (
      <div className="searchPage">
        <div className="searchPage_header">
          <div className="searchPage_header_left">
            <Link to="/">
              <img
                className="searchPage_logo"
                src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
              />
            </Link>
          </div>
          <div className="searchPage_headerBody">
            <Search hideButtons />
            <div className="searchPage_options">
              <div className="searchPage_optionsLeft">
                <div className="searchPage_option">
                  <SearchIcon />
                  <Link to="/all">All</Link>
                </div>
                <div className="searchPage_option">
                  <DescriptionIcon />
                  <Link to="/all">News</Link>
                </div>
                <div className="searchPage_option">
                  <ImageIcon />
                  <Link to="/all">Images</Link>
                </div>
                <div className="searchPage_option">
                  <LocalOfferIcon />
                  <Link to="/all">Shopping</Link>
                </div>
                <div className="searchPage_option">
                  <RoomIcon />
                  <Link to="/all">Maps</Link>
                </div>
                <div className="searchPage_option">
                  <MoreVertIcon />
                  <Link to="/all">more</Link>
                </div>
              </div>
              <div className="searchPage_optionsRight">
                <div className="searchPage_option">
                  <Link to="/settings">Settings</Link>
                </div>
                <div className="searchPage_option">
                  <Link to="/tools">Tools</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {term && (
          <div className="searchPage_results">
            <p className="searchPage_resultCount">
              About {data?.searchInformation.formattedTotalResults} results (
              {data?.searchInformation.formattedSearchTime} seconds) for {term}
            </p>
            {data?.items.map((item) => (
              <div className="searchPage_result">
                <a style={{textDecoration: 'none'}} href={item.link}>{item.displayLink}</a>
                <a className="searchPage_resultTitle" href={item.link}>
                  <h2>{item.title}</h2>
                </a>
                <p className="searchPage_resultSnippet">{item.snippet}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
};

export default SearchPage;