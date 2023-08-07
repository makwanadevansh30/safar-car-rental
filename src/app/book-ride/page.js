'use client'
import React from 'react'
import Layout from '../components/user/Layout/Layout'
import BookRide from './BookRide'
import BookRideNavbar from './BookRideNavbar'

const page = () => {
  return (
    <div>
     {/*  <BookRideNavbar/> */}
      <Layout Children={<BookRide/>}></Layout>
    </div>
  )
}

export default page
 