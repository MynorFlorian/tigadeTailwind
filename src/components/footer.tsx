import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';


const Footer = () => {

    return(<>
    
        <div className="bg-color-footer w-full pt-16 pr-4 pb-16 pl-4 md:px-24 lg:px-8">

            <div className="flex flex-col justify-between pt-3 pr-0 pb-10 pl-0 border-t border-gray-800 sm:flex-row
            mr-auto ml-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8
            ">
                <h1 className="text-2xl text-white">Litigade.</h1>
                <div className="flex items-center mt-4 space-x-4 sm:mt-0">
                    <i className="fa-twitter h-5 fab text-gray-500
                    transition-colors duration-300 hover:text-teal-accent-400">
                        <FaFacebookF
                            color='#325bf5'
                            size={25}
                        />
                    </i>
                    <i className="fa-instagram h-5 fab
                    text-gray-500 transition-colors duration-300 hover:text-teal-accent-400">

                        <FaInstagram 
                            color='#e5205a'
                            size={25}
                        />                        

                    </i>
                    <i  className="fa-facebook h-5
                    fab text-gray-500 transition-colors duration-300 hover:text-teal-accent-400">
                        
                        <FaTwitter 
                            color='#20a6df'
                            size={25}
                        />                        

                    </i>

                    <i  className="fa-youtube h-5
                    fab text-gray-500 transition-colors duration-300 hover:text-teal-accent-400">
                        
                        <FaYoutube
                            color='#e42f08'
                            size={25}
                        />                        

                    </i>
                </div>
            </div>

            
            <div className="mr-auto ml-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="mt-0 mr-0 mb-8 ml-0 grid row-gap-10 lg:grid-cols-6">
                <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
                    <div>
                    <p  className="tracking-wide text-gray-300 text-medium">Category</p>
                    <div className="mt-2 mr-0 mb-0 ml-0 space-y-2">
                        <div>
                        <p className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500">Headlines</p>
                        </div>
                        <div>
                        <p className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500">World news</p>
                        </div>
                        <div>
                        <p className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500">Sports</p>
                        </div>
                        <div>
                        <p className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500">Blogs</p>
                        </div>
                    </div>
                    </div>
                    <div>
                    <p  className="tracking-wide text-gray-300 text-medium">Category</p>
                    <div className="mt-2 mr-0 mb-0 ml-0 space-y-2">
                        <div>
                        <p className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500">Headlines</p>
                        </div>
                        <div>
                        <p className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500">World news</p>
                        </div>
                        <div>
                        <p className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500">Sports</p>
                        </div>
                        <div>
                        <p className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500">Blogs</p>
                        </div>
                    </div>
                    </div>
                    <div>
                    <p  className="tracking-wide text-gray-300 text-medium">Category</p>
                    <div className="mt-2 mr-0 mb-0 ml-0 space-y-2">
                        <div>
                        <p className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500">Headlines</p>
                        </div>
                        <div>
                        <p className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500">World news</p>
                        </div>
                        <div>
                        <p className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500">Sports</p>
                        </div>
                        <div>
                        <p className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500">Blogs</p>
                        </div>
                    </div>
                    </div>
                    <div>
                    <p  className="tracking-wide text-gray-300 text-medium">Category</p>
                    <div className="mt-2 mr-0 mb-0 ml-0 space-y-2">
                        <div>
                        <p className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500">Headlines</p>
                        </div>
                        <div>
                        <p className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500">World news</p>
                        </div>
                        <div>
                        <p className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500">Sports</p>
                        </div>
                        <div>
                        <p className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500">Blogs</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="md:max-w-md lg:col-span-2">
                    <p className="tracking-wide text-gray-300 font-medium text-base">Subscribe for updates</p>
                    <div  className="flex mt-4 mr-0 mb-0 ml-0">
                    <input placeholder="Email" type="text" className="w-full h-12 pt-0 pr-4 pb-0 pl-4 mt-0 mr-0 mb-4 ml-0 bg-white
                        border-gray-300 border flex-grow transition duration-200 rounded shadow-sm appearance-none md:mr-2 md:mb-0
                        focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"/>
                    <button className="inline-flex items-center justify-center h-12 pt-0 pr-6 pb-0 pl-6 mt-0 mr-0 mb-4 ml-0
                        font-medium text-white rounded bg-color-suscribe tracking-wide transition duration-200 shadow-md
                        hover:bg-deep-blue-900 focus:shadow-outline focus:outline-none">Subscribe</button>
                    </div>
                    <p className="mt-4 mr-0 mb-0 ml-0 text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimh.</p>
                </div>
                </div>

            </div>
        </div>    

        <div className="
            bg-azul-boton
        flex flex-col justify-between border-t border-gray-200 sm:flex-row w-full pt-5 pr-4 pb-5 pl-4 md:px-24 lg:px-8">
            <p className="text-sm text-gray-200">© Copyright 2021 Lorem Inc. All rights reserved.</p>
            <div className="flex items-center mt-4 space-x-4 sm:mt-0"><i className="fa-twitter h-5 fab text-gray-500
                transition-colors duration-300 hover:text-teal-accent-400"></i><i className="fa-instagram h-5 fab
                text-gray-500 transition-colors duration-300 hover:text-teal-accent-400"></i><i className="fa-facebook h-5
                fab text-gray-500 transition-colors duration-300 hover:text-teal-accent-400"></i></div>
        </div>
    
    </>)
}


export default Footer