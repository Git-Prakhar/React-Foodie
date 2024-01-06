import React from 'react'
import './Navbar.css'
import searchIcon from '../images/searchIcon.svg'

export default function SearchBar() {
    const filterClicked = (code) => {
        let btns = document.querySelectorAll('.searchBarFilters');
        let selection = btns[code];
        if(selection.classList.contains('filterActive')) {
            selection.classList.remove('filterActive');
        }else{
            selection.classList.add('filterActive');
        }
    }
    return (
        <div id="mpSearchBar">
            <form id='searchBar'>
                <img src={searchIcon} alt="" />
                <input type="text" name="search" id='searchTextInp' autoComplete='off' placeholder='Seach Dish' />
            </form>
            <div id="searchBarFilterHolder">
                <button className='searchBarFilters'>Filters</button>
                <button className='searchBarFilters' onClick={()=>{filterClicked(1)}}>Pure Veg</button>
                <button className='searchBarFilters' onClick={()=>{filterClicked(2)}}>Non-Veg</button>
                <button className='searchBarFilters' onClick={()=>{filterClicked(3)}}>Best Sellers</button>
            </div>
        </div>
    )
}
