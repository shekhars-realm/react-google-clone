import React from 'react';
import './SearchPage.css'
import {useStateValue} from '../StateProvider'
import useGoogleSearch from '../useGoogleSearch';

const SearchPage = () => {

    const [{term}, dispatch] = useStateValue()
    const {data} = useGoogleSearch(term)

    console.log(data)

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