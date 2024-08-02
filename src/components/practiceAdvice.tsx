import { FaBalanceScale } from "react-icons/fa";
import { TbGavel } from "react-icons/tb";
import { FaFileCircleExclamation } from "react-icons/fa6";

const services = [
    {
        title: 'Frauds or Mislead',
        description: [
            'The best products start with Figma',
            'Design with real data',
            'Lightning fast prototyping',
            'Fastest way to organize',
            'Work at the speed of thought.'
        ],
        icon: <FaBalanceScale 
            size={30}
            color="#F6E4D7"
        />
    },
    {
        title: 'Bailes & Warrants',
        description: [
            'The best products start with Figma',
            'Design with real data',
            'Lightning fast prototyping',
            'Fastest way to organize',
            'Work at the speed of thought.'
        ],
        icon: <TbGavel 
            size={30}
            color="#F6E4D7"
        />
    },
    {
        title: 'Federal Drug Crimes',
        description: [
            'The best products start with Figma',
            'Design with real data',
            'Lightning fast prototyping',
            'Fastest way to organize',
            'Work at the speed of thought.'
        ],
        icon: <FaFileCircleExclamation 
            size={30}
            color="#F6E4D7"        
        />
    }
];

const PracticeAdvice = () => {

    return (
        <section className="py-20 bg-gray-100 w-screen min-h-screen">
            <div className="max-w-7xl mx-auto text-center mb-12 mt-10 sm:mt-20 md:mt-40 px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Practice Advice</h2>
                <p className="text-gray-600 mt-4">
                    Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
                </p>
            </div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
                {services.map((service, index) => (
                    <div key={index} className=" shadow-lg rounded-lg  text-left bg-card-color">
                        <div className="flex items-center mb-4 p-6" >
                            <div className="p-4 bg-white rounded-full">
                                {
                                    service.icon
                                }
                            </div>
                            <h3 className="ml-4 text-lg sm:text-xl font-bold text-gray-900">{service.title}</h3>
                        </div>
                        
                        <div className='bg-white border border-cyan-400 p-8 rounded-2xl'>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                {service.description.map((desc, i) => (
                                    <li key={i}>{desc}</li>
                                ))}
                            </ul>
                            <a href="#" className="text-card-color mt-4 inline-block">Learn More</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>

    );
}


export default PracticeAdvice