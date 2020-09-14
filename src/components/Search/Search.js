import React, { useState } from 'react';
import {useHistory} from 'react-router-dom'

import './Search.css'

import SearchIcon from '@material-ui/icons/Search'
import MicIcon from "@material-ui/icons/Mic";
import CloseIcon from "@material-ui/icons/Close";
import Button from '@material-ui/core/Button'

function Search({hideButtons = false}) {

    const [input, setInput] = useState('')
    const history = useHistory() 

    const search = (e) => {
        e.preventDefault()
        console.log(input)
        history.push('/search')
    }

    return (
      <form className="search">
        <div className="search_input">
          {!hideButtons && <SearchIcon className="search_inputIcon" />}
          <input value={input} onChange={(e) => setInput(e.target.value)} />
          {hideButtons && <CloseIcon onClick={e => setInput('')} />}
          {hideButtons && <SearchIcon className="search_inputIcon" />}
          <MicIcon className="search_inputIcon" />
        </div>

        {!hideButtons ? (
          <div className="search_buttons">
            <Button type="submit" onClick={search} variant="outlined">
              Google Search
            </Button>
            <Button variant="outlined">I'm feeling Lucky</Button>
          </div>
        ) : (
          <div className="search_buttons">
            <Button
              className="hide_buttons"
              type="submit"
              onClick={search}
              variant="outlined"
            >
              Google Search
            </Button>
            <Button className="hide_buttons" variant="outlined">
              I'm feeling Lucky
            </Button>
          </div>
        )}
      </form>
    );
}

export default Search;