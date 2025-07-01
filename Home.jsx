
import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import IntroPost from '../Components/IntroPost'
import Search from '../Components/Search'
import Blogs from '../Components/Blogs'


function Home() {
  return (
    <div>
        {/* Header */}
        <Header/>
        {/* Search */}
        <Search/>
        {/* IntroPost */}
        <IntroPost/>
        {/* Blogs */}
        <Blogs/>
        {/* Footer */}
        <Footer/>
    </div>
  )
}

export default Home