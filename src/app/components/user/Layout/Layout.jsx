'use client'
import { Grid } from '@material-ui/core'
import React from 'react'

const Layout = ({Children}) => {
  return (
    <div className='h-screen'>
        <Grid container>
      <Grid item xs={12} md={8} lg={5}>
        {Children } 
      </Grid>
      <Grid className='w-full h-screen 'xs={0} md={4} lg={7} >
        <img className='object-cover object-right-top w-full h-full'src='https://img.pikbest.com/origin/05/82/85/53ApIkbEsTtj2.png!sw800'/>
      </Grid>
      </Grid>
    </div>
  )
}

export default Layout
