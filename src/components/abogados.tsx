import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const attorneys = [
    {
        name: 'Ashley Fletcher',
        position: 'LAYER & CEO',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUdDuZhJhSwStLmdU4AhjakaY3bUiqTH0MLg&s', // Reemplaza con la URL de la imagen
        social: {
        facebook: '#',
        instagram: '#',
        twitter: '#',
        },
    },
    {
        name: 'Maria Herrera',
        position: 'CEO',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTkCX7vqDrW4gYQrW1fPIo0Zx3N_D9WhPXGPXHmk1063WfnQ4Uv0HC8njcWNSUhAW7L9k&usqp=CAU', // Reemplaza con la URL de la imagen
        social: {
        facebook: '#',
        instagram: '#',
        twitter: '#',
        },
    },
    {
        name: 'Avie Beaton',
        position: 'LAYER CIVIL LAW',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPuwEX7yDnYRFTcKYnvcqABVrbaw5AiCAzIoc8oFVBEuE9VprEypao5SVobZclx366sKk&usqp=CAU', // Reemplaza con la URL de la imagen
        social: {
        facebook: '#',
        instagram: '#',
        twitter: '#',
        },
    },
];

const Abogados = () => {
    return (
        <div className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Meet Our Attorneys</h2>
            <p className="text-gray-600 mt-4">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
            </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
            {attorneys.map((attorney, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img src={attorney.image} alt={attorney.name} className="w-full h-56 object-cover" />
                <div className="p-6 text-center">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">{attorney.name}</h3>
                <p className="text-gray-600">{attorney.position}</p>
                <div className="flex justify-center mt-4 space-x-4">
                    <a href={attorney.social.facebook} className="text-gray-500 hover:text-gray-900">
                    <FaFacebookF 
                        color='#295C7A'
                    />
                    </a>
                    <a href={attorney.social.instagram} className="text-gray-500 hover:text-gray-900">
                    <FaInstagram 
                        color='#295C7A'
                    />
                    </a>
                    <a href={attorney.social.twitter} className="text-gray-500 hover:text-gray-900">
                    <FaTwitter 
                        color='#295C7A'
                    />
                    </a>
                </div>
                </div>
            </div>
            ))}
        </div>
        </div>
    );
};

export default Abogados;
