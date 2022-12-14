import { useState } from "react";
import logo from '../assets/logo.svg';

        export const Nav = () => {
            const [isMenuOpen, setIsMenuOpen] = useState(false);
          
            return (
        <div className=" bg-lime-500">
          
          <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="relative flex grid items-center grid-cols-2 lg:grid-cols-3">

                  <ul className="flex items-center hidden space-x-8 lg:flex">
                    <li>
                      <a
                        href="/"
                        className="font-medium tracking-wide text-gray-50 transition-colors duration-200 hover:text-deep-purple-accent-400 hover:text-lime-900"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="/produtos"
                        className="font-medium tracking-wide text-gray-50 transition-colors duration-200 hover:text-deep-purple-accent-400 hover:text-lime-900"
                      >
                        Estoque
                      </a>
                    </li>
                  </ul>
                    <a className="flex justify-center xs:justify-start" href="/">
                    <img className="max-h-20" src={logo} alt="" />
                    </a>

                  <ul className="flex items-center hidden ml-auto space-x-8 lg:flex">
                    <li>
                      <a
                        href="/"
                        className="bg-teal-50 inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-lime-500 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none hover:text-gray-700"
                      >
                        Fazer Login
                      </a>
                    </li>
                  </ul>

                  <div className="ml-auto lg:hidden">
                    <button
                      aria-label="Open Menu"
                      title="Open Menu"
                      className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                      onClick={() => setIsMenuOpen(true)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                        />
                        <path
                          fill="currentColor"
                          d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                        />
                        <path
                          fill="currentColor"
                          d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                        />
                      </svg>
                    </button>
                    {isMenuOpen && (
                      <div className="absolute top-0 left-0 w-full">
                        <div className="p-5 bg-white border rounded shadow-sm">
                          <div className="flex items-center justify-between mb-4">
                            <div>
                 

                              <button
                                aria-label="Close Menu"
                                title="Close Menu"
                                className="p-2 -mt-1 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                  <path
                                    fill="currentColor"
                                    d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                  />
                                </svg>
                              </button>
                            </div>
                          </div>
                          <nav>
                            <ul className="space-y-4">
                              <li>
                                <a
                                  href="/"
                                  className="font-medium tracking-wide text-gray-700 hover:text-lime-500 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                >
                                  Home
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/produtos"
                                  className="font-medium tracking-wide text-gray-700 hover:text-lime-500 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                >
                                  estoque
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/"
                                  className="w-full font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                >
                                  <button type="button" className="w-full text-white bg-gradient-to-r from-lime-400 via-lime-500 to-lime-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Fazer Login</button>
                                </a>
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              </div>

            );
          };