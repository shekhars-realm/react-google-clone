import React, { useState, useEffect } from 'react';
import { GOOGLE_API_KEY, SEARCH_ID } from "./keys.js";
import {defaultResponse} from './response'

const useGoogleSearch = (term) => {
    const [data, setData] = useState(null);

    useEffect(() => {

        const fetchData = async() => {
            fetch(`https://www.googleapis.com/customsearch/v1?key=${GOOGLE_API_KEY}&cx=${SEARCH_ID}&q=${term}`)
            .then(response => response.json())
            .then(result => {
                setData(result)
            })
            .catch(err => {
                setData(defaultResponse)
            })
        }

        fetchData()

    }, [term])

    return {data}
};

export default useGoogleSearch;