"use client"
import React from 'react'
import './navbar.css'
// import MenuIcon from '@material-ui/icons/Menu';

const HomeNavbar = () => {
  return (
    <nav className="py-4 bg-blue-400 navbar active">
      <div className="container px-4 max-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex items-center mx-14">
              <img
                className="logo"
                src="https://lh3.googleusercontent.com/-pYKjQhTdMQU/AAAAAAAAAAI/AAAAAAAAAAA/uHkoegu8DaE/s41-w44-h44-p-k-no-ns-nd/photo.jpg"
              />
              {/* https://s3-ap-southeast-1.amazonaws.com/ola-prod-website/ola-white-logo.svg */}
            </div>
            <div>
              <ul className="flex items-center">
                <li className="mr-6">
                  <a href="#" className="text-white hover:text-black">
                    {" "}
                    Company{" "}
                  </a>
                </li>
                <li className="mr-6">
                  <a href="#" className="text-white hover:text-black">
                    {" "}
                    About US
                  </a>
                </li>
                <li className="mr-6">
                  <a href="#" className="text-white hover:text-black">
                    {" "}
                    Safety
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mx-20">
            <button className="px-4 py-3 text-sm font-semibold text-black bg-white hover:bg-gray-500">
              Book Cab
            </button>
            <button className="px-4 py-3 ml-5 text-sm font-semibold text-black bg-white hover:bg-gray-500">
              Monthly Rental
            </button> 
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-8 h-4"
            >
              <path
                fill-rule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clip-rule="evenodd"
              />
              </svg> */}
           {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
 */}

            {/* <FontAwesomeIcon icon="fa-solid fa-bars" /> */}
            {/* <MenuIcon className='ml-5 text-white-3xl'/>  */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default HomeNavbar
// 