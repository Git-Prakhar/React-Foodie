import React from 'react'
import NavBar from './NavBar'
import SearchBar from './SearchBar'
import MenuFrontPage from './MenuFrontPage'

export default function MainPage() {
  return (
    <>
    <SearchBar />
    <div id='mainPage' style={{backgroundColor: '#202020'}}>
    <NavBar />
    <MenuFrontPage />
    </div>
    </>
  )
}
