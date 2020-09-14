import React from 'react';
import './SearchPage.css'
import {useStateValue} from '../StateProvider'

const SearchPage = () => {

    const [{term}, dispatch] = useStateValue()

    return (
        <div className='searchPage'>
            <div className='searchPage_header'>
                <h1>{term}</h1>
            </div>

            <div className='searchPage_body'>

            </div>
        </div>
    );
};

export default SearchPage;