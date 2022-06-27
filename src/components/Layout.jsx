import {useEffect} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Head from 'next/head'

export default function Layout({children}){
  return (
    <>
      <Head>
        <title>Angel Riera Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <Navbar/>

      <div className=''>
        {children}
      </div>

      <Footer/>
    </>
  )
}
