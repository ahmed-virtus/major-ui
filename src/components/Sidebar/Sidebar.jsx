import React, { useState } from 'react'
import { useEffect } from 'react';
import { PiSignOutBold } from "react-icons/pi";
import { IoSettingsSharp } from "react-icons/io5";
import { MdOutlineWatchLater } from "react-icons/md";
import { FiGrid } from "react-icons/fi";
import { PiBuildingOfficeBold } from "react-icons/pi";
import { GrResources } from "react-icons/gr";
import { Link, useNavigate, Navigate } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useLogout } from '../../hooks/useLogout';
// import { useGlobalState } from '../../routes/GlobalStateContext';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  // var navigate = useNavigate()
  // const { isLoggedIn, logout } = useGlobalState();
  // const handleLogout = () => {
  //       logout()
  //       navigate('/login');
  // };
  // console.log('@@isLoggedIn',isLoggedIn)
  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     <Navigate to="/login" />;
  //   }
  // }, [isLoggedIn]);

  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleLogout = () => {
    logout()
  }
  const handleHover = () => {
    setIsExpanded(true)
  }
  const handleMouseLeave = () => {
    setIsExpanded(false)
  }

  return (
    <div className={`relative hidden h-screen shadow-lg lg:block transition-all duration-250 overflow-hidden ${isExpanded ? 'w-60' : 'w-14'}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >

      <div className="h-full bg-white dark:bg-gray-lighter ">
        <div className="flex items-center justify-center h-10 border ">
          {/* <svg width="35" height="30" viewBox="0 0 256 366" version="1.1" preserveAspectRatio="xMidYMid">
            <defs>
              <linearGradient x1="12.5189534%" y1="85.2128611%" x2="88.2282959%" y2="10.0225497%" id="linearGradient-1">
                <stop stop-color="#FF0057" stop-opacity="0.16" offset="0%">
                </stop>
                <stop stop-color="#FF0057" offset="86.1354%">
                </stop>
              </linearGradient>
            </defs>
            <g>
              <path d="M0,60.8538006 C0,27.245261 27.245304,0 60.8542121,0 L117.027019,0 L255.996549,0 L255.996549,86.5999776 C255.996549,103.404155 242.374096,117.027222 225.569919,117.027222 L145.80812,117.027222 C130.003299,117.277829 117.242615,130.060011 117.027019,145.872817 L117.027019,335.28252 C117.027019,352.087312 103.404567,365.709764 86.5997749,365.709764 L0,365.709764 L0,117.027222 L0,60.8538006 Z" fill="#001B38">
              </path>
              <circle fill="url(#linearGradient-1)" transform="translate(147.013244, 147.014675) rotate(90.000000) translate(-147.013244, -147.014675) " cx="147.013244" cy="147.014675" r="78.9933938">
              </circle>
              <circle fill="url(#linearGradient-1)" opacity="0.5" transform="translate(147.013244, 147.014675) rotate(90.000000) translate(-147.013244, -147.014675) " cx="147.013244" cy="147.014675" r="78.9933938">
              </circle>
            </g>
          </svg> */}
          {/* {
            isExpanded ? ( */}
          <>
            <h1 className={`dark:text-gray-200 text-2xl uppercase font-bold transition-all duration-500 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}
              style={{ visibility: isExpanded ? 'visible' : 'hidden' }}>
              classroom
            </h1>
          </>
          {/* ) : null
          } */}
        </div>
        <nav className="mt-6 h-full flex justify-between flex-col">
          <div className="">
            <a className="flex items-center justify-start w-full p-4 my-2 font-thin text-blue-500 uppercase transition-colors duration-200 border-r-4 border-blue-500 bg-gradient-to-r from-white to-blue-100 dark:from-gray-700 dark:to-gray-800" href="#">
              <span className="text-left">
                <FiGrid />
              </span>
              <span 
              className={`mx-4 text-sm transition-all duration-100 font-normal ${isExpanded ? 'opacity-100' : 'opacity-40'}`}
              style={{ visibility: isExpanded ? 'visible' : 'hidden' }}
              >
                Home
              </span>
            </a>
            <a className="flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 dark:text-gray-200 hover:text-blue-500" href="#"
            >
              <span className="text-left">
                <PiBuildingOfficeBold />

              </span>
              <span className={`mx-4 text-sm transition-all duration-100 font-normal ${isExpanded ? 'opacity-100' : 'opacity-40'}`}
              style={{ visibility: isExpanded ? 'visible' : 'hidden' }}>
                Classroom
              </span>
            </a>
            {/* <a className="flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 dark:text-gray-200 hover:text-blue-500" href="#">
              <span className="text-left">
              <GrResources />

              </span>
              <span className="mx-4 text-sm font-normal">
                Resources
              </span>
            </a>
            <a className="flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 dark:text-gray-200 hover:text-blue-500" href="#">
              <span className="text-left">
                <svg width="20" height="20" fill="currentColor" className="m-auto" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg">
                  <path d="M960 0l960 384v128h-128q0 26-20.5 45t-48.5 19h-1526q-28 0-48.5-19t-20.5-45h-128v-128zm-704 640h256v768h128v-768h256v768h128v-768h256v768h128v-768h256v768h59q28 0 48.5 19t20.5 45v64h-1664v-64q0-26 20.5-45t48.5-19h59v-768zm1595 960q28 0 48.5 19t20.5 45v128h-1920v-128q0-26 20.5-45t48.5-19h1782z">
                  </path>
                </svg>
              </span>
              <span className="mx-4 text-sm font-normal">
                Schedule
              </span>
            </a>
            <a className="flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 dark:text-gray-200 hover:text-blue-500" href="#">
              <span className="text-left">
              <MdOutlineWatchLater />
              </span>
              <span className="mx-4 text-sm font-normal">
                Forum
              </span>
            </a>
            <a className="flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 dark:text-gray-200 hover:text-blue-500" href="#">
              <span className="text-left">
                <svg width="20" height="20" fill="currentColor" className="m-auto" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1024 1131q0-64-9-117.5t-29.5-103-60.5-78-97-28.5q-6 4-30 18t-37.5 21.5-35.5 17.5-43 14.5-42 4.5-42-4.5-43-14.5-35.5-17.5-37.5-21.5-30-18q-57 0-97 28.5t-60.5 78-29.5 103-9 117.5 37 106.5 91 42.5h512q54 0 91-42.5t37-106.5zm-157-520q0-94-66.5-160.5t-160.5-66.5-160.5 66.5-66.5 160.5 66.5 160.5 160.5 66.5 160.5-66.5 66.5-160.5zm925 509v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm0-260v-56q0-15-10.5-25.5t-25.5-10.5h-568q-15 0-25.5 10.5t-10.5 25.5v56q0 15 10.5 25.5t25.5 10.5h568q15 0 25.5-10.5t10.5-25.5zm0-252v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm256-320v1216q0 66-47 113t-113 47h-352v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-768v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-352q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1728q66 0 113 47t47 113z">
                  </path>
                </svg>
              </span>
              <span className="mx-4 text-sm font-normal">
                Reports
              </span>
            </a>
            <a className="flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 dark:text-gray-200 hover:text-blue-500" href="#">
              <span className="text-left">
                <svg width="20" fill="currentColor" height="20" className="w-5 h-5" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1088 1256v240q0 16-12 28t-28 12h-240q-16 0-28-12t-12-28v-240q0-16 12-28t28-12h240q16 0 28 12t12 28zm316-600q0 54-15.5 101t-35 76.5-55 59.5-57.5 43.5-61 35.5q-41 23-68.5 65t-27.5 67q0 17-12 32.5t-28 15.5h-240q-15 0-25.5-18.5t-10.5-37.5v-45q0-83 65-156.5t143-108.5q59-27 84-56t25-76q0-42-46.5-74t-107.5-32q-65 0-108 29-35 25-107 115-13 16-31 16-12 0-25-8l-164-125q-13-10-15.5-25t5.5-28q160-266 464-266 80 0 161 31t146 83 106 127.5 41 158.5z">
                  </path>
                </svg>
              </span>
              <span className="mx-4 text-sm font-normal">
                Settings
              </span>
            </a> */}
          </div>
          {/* <div className="border-2 ,border-sky-50"></div> */}
          <div className="mb-20 border-emerald-300 border-2 justify-center items-center">
          <a className="flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 dark:text-gray-200 hover:text-blue-500" href="#"
            >
              <span className="text-left">
                <IoSettingsSharp />

              </span>
              <span className={`mx-4 text-sm transition-all duration-100 font-normal ${isExpanded ? 'opacity-100' : 'opacity-40'}`}
              style={{ visibility: isExpanded ? 'visible' : 'hidden' }}>
                 Preferences
              </span>
            </a>
          <a className="flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 dark:text-gray-200 hover:text-blue-500" href="#" onClick={handleLogout}
            >
              <span className="text-left">
                <PiSignOutBold />

              </span>
              <span className={`mx-4 text-sm transition-all duration-100 font-normal ${isExpanded ? 'opacity-100' : 'opacity-40'}`}
              style={{ visibility: isExpanded ? 'visible' : 'hidden' }}>
                 signout
              </span>
            </a>
            {/* <a className="flex items-center justify-center w-full p-4 font-thin text-blue-500 uppercase transition-colors duration-200 border-r-4 border-blue-500 bg-gradient-to-r from-white to-blue-100 dark:from-gray-700 dark:to-gray-800" href="#">
              <span className="text-left">
                <IoSettingsSharp />
              </span>
              {
                isExpanded ? (
                  <span className="transition-all duration-500 text-sm font-normal">
                    Preferences
                  </span>
                ) : null
              }
            </a> */}
            {/* <Link className="flex items-center justify-center w-full p-4  font-thin text-blue-500 uppercase transition-colors duration-200 border-r-4 border-blue-500 bg-gradient-to-r from-white to-blue-100 dark:from-gray-700 dark:to-gray-800" onClick={handleLogout}>
              <span className="text-left">
                <PiSignOutBold />
              </span>
              {
                isExpanded ? (
                  <span className=" transition-all duration-500 text-sm font-normal">
                    signout
                  </span>
                ) : null
              }
            </Link> */}

          </div>
        </nav>
      </div >
    </div >

  )
}

export default Sidebar