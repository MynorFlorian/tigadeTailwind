import { useState } from "react"

const NavBarOpt = () => {
    const [option, setOption] = useState<number>(1)
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const scrollToSection = (section: string) => {
        const seccion = document.getElementById(section)
        if (seccion) {
            seccion.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const selected: React.HTMLAttributes<HTMLDivElement>['className'] = `block py-2 px-3 text-gray-900 
                            bg-transparent rounded md:bg-transparent 
                            md:text-gray-900 md:p-0 dark:text-gray-900 
                            md:dark:text-gray-900`

    const waiting: React.HTMLAttributes<HTMLDivElement>['className'] = `
    block py-2 px-3 text-gray-800 rounded     
    md:hover:bg-transparent md:border-0 
    dark:text-gray-300 md:dark:hover:text-gray-400 
    md:p-0
    dark:hover:text-gray-300 md:dark:hover:bg-transparentz`
    

    
    return (
        <nav className="bg-transparent border-gray-200 dark:bg-transparent w-full top-0 z-10">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-800 dark:text-gray-900">
                        Litigade
                    </span>
                </a>
                <button
                    type="button"
                    className="inline-flex items-center 
                    p-2 w-10 h-10 
                    justify-center 
                    text-gray-500 dark:text-gray-100 
                    hover:bg-gray-100 
                    dark:hover:bg-gray-400 rounded-lg md:hidden"
                    aria-controls="navbar-default"
                    aria-expanded={isOpen}
                    onClick={toggleMenu}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-6 h-6"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
                <div className={`w-full md:block md:w-auto ${isOpen ? 'block' : 'hidden'}`} id="navbar-default">
                    <ul className="font-sans flex flex-col p-4 md:p-0 mt-4  rounded-lg
                            text-center text-xl
                            md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 
                            
                            md:border-0 md:bg-transparent dark:bg-gray-100 md:dark:bg-transparent
                            ">
                        <li>
                            <a href="#home" className={option === 1 ? selected : waiting} aria-current="page"
                                onClick={() => {
                                    setOption(1)
                                    scrollToSection("home")
                                }}
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#pricing" className={option === 2 ? selected : waiting}
                                onClick={() => {
                                    setOption(2)
                                    scrollToSection("pricing")
                                }}
                            >
                                Pricing
                            </a>
                        </li>
                        <li>
                            <a href="#product" className={option === 3 ? selected : waiting}
                                onClick={() => {
                                    setOption(3)
                                    scrollToSection("product")
                                }}
                            >
                                Product
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className={option === 4 ? selected : waiting}
                                onClick={() => {
                                    setOption(4)
                                    scrollToSection("contact")
                                }}
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
    

  

    // return (
    //     <nav className="bg-transparent 
    //     border-gray-200 dark:bg-transparent  w-full">
    //         <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    //             <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
    //                 <span className="self-center text-2xl 
    //                 font-semibold whitespace-nowrap 
    //                 text-gray-800 dark:text-gray-900">Litigade</span>
    //             </a>

    //             <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
    //                 <span className="sr-only">Open main menu</span>
    //                 <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
    //                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
    //                 </svg>
    //             </button>

    //             <div className="hidden w-full md:block md:w-auto" id="navbar-default">
    //                 <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg
    //                     bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 
    //                     md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent
    //                     dark:border-gray-700">
    //                     <li>
    //                         <a href="#home" className={option === 1 ? selected : waiting} aria-current="page"
    //                             onClick={() => {
    //                                 setOption(1)
    //                                 scrollToSection("home")
    //                             }}
    //                         >
    //                             Home
    //                         </a>
    //                     </li>
    //                     <li>
    //                         <a href="#pricing" className={option === 2 ? selected : waiting} 
    //                             onClick={() => {
    //                                 setOption(2)
    //                                 scrollToSection("pricing")
    //                             }}
    //                         >
    //                             Pricing
    //                         </a>
    //                     </li>
    //                     <li>
    //                         <a href="#product" className={option === 3 ? selected : waiting} 
    //                             onClick={() => {
    //                                 setOption(3)
    //                                 scrollToSection("product")
    //                             }}
    //                         >
    //                             Product
    //                         </a>
    //                     </li>
    //                     <li>
    //                         <a href="#contact" className={option === 4 ? selected : waiting} 
    //                             onClick={() => {
    //                                 setOption(4)
    //                                 scrollToSection("contact")
    //                             }}
    //                         >
    //                             Contact
    //                         </a>
    //                     </li>
    //                 </ul>
    //             </div>
    //         </div>
    //     </nav>
        
    // )
}

export default NavBarOpt
