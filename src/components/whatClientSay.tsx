import { FaBalanceScale } from "react-icons/fa";
import { TbGavel } from "react-icons/tb";
import { FaFileCircleExclamation } from "react-icons/fa6";
import { IoMdStar } from "react-icons/io";
import Rating from "../utils/rating";


const clients = [
    {
        title: 'Frauds or Mislead',
        description: [
            'The best products start with Figma'
        ],
        icon: <FaBalanceScale 
            size={30}
            color="#F6E4D7"
        />
    },
    {
        title: 'Bailes & Warrants',
        description: [
            'The best products start with Figma'
        ],
        icon: <TbGavel 
            size={30}
            color="#F6E4D7"
        />
    },
    {
        title: 'Federal Drug Crimes',
        description: [
            'The best products start with Figma'
        ],
        icon: <FaFileCircleExclamation 
            size={30}
            color="#F6E4D7"        
        />
    }
]

const WhatClientSay = () => {

    return(<>
        <section
            className="min-h-screen bg-cover bg-center w-screen bg-color-fondo"
        >
            <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-12">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                        What clients say
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mt-4">
                    Problems trying to resolve the conflict between 
                    the two major realms of Classical physics: Newtonian mechanics 
                    </p>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
                    {
                        clients.map((service, index) => <>
                        
                                <div key={index} className=" shadow-lg text-left bg-white
                                    border border-gray-400 rounded-md
                                ">
                                    <div className=" items-center p-2" >
                                        <div className="">
                                            <Rating />
                                        </div>
                                    </div>
                                    <div className='bg-white p-8 rounded-2xl'>
                                        <p className="text-gray-700 space-y-2">
                                            {service.description}                                            
                                        </p>
                                    </div>

                                    <div className="flex items-center" >
                                    <div className="flex items-center mb-4">
                                            <div className="p-4  rounded-full">
<img src={'https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg'} 
                                                className="w-10 h-10 rounded-full" />
                                            </div>
                                        </div>
                                        <div className="">
                                            <h3 className="ml-4 text-md sm:text-xl font-bold text-card-color">{service.title}</h3>
                                            <h3 className="ml-4 text-lg sm:text-xl font-bold text-gray-900">Designer</h3>
                                        </div>
                                    </div>
                            </div>
                        </>)
                    }
                </div>

            </div>
        </section>
    </>)
}

export default WhatClientSay