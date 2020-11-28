import React from 'react';
import './styles.css';


function SearchBox (props) {
    return <input type="text" name="search" className="form-control" placeholder="Search for a user" aria-label="Username" aria-describedby="basic-addon1"></input>
}

export default SearchBox;