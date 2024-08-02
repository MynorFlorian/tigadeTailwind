import React from 'react';
import { enviarEmail } from '../globals/sendEmail';


const Cita = () => {
    const handleSubmit = (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget as HTMLFormElement);   
    console.log(formData.get('name'))

    // enviarEmail(
    //     formData.get('department'),
    //     formData.get('email'),
    //     formData.get('time'),
    //     formData.get('notes'),
    //     formData.get('name'));

    
    };

    return (<>
        <div className="min-h-screen bg-cover bg-center w-screen bg-gray-100" 
        style={{ backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/18a7/9b44/58652c1e7196baddbd4dc252c21cac34?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lSPRQBp0ccpGHIv0y1iOxBEXvJR3XUcmI6F0oNqszdJg-rm65X4qlUai-LsGoZjPKdzwBR7QF60zYVA8WnTyAPmTd2q1RLWBO3XBn4gpoCm1ZAwDJM093cuMUUEsaFAxOGr~x3XqFt7DNpyWAVMSQAOapTqLeo~CP~~CIwc9FHlr9UJSsICHgGKpoDQ306TqI3mK18kSB2vxKgK5wR1j8Q5fLnvLw02Culd5d3TyeKtMpgvNyM~9cxHVHbFeO6pK3KBycQoJcGPhlKMh1-qdHQzselmaGbsX8wPfoXt0aZl9boQIfVXDFD5e88WjnZAKJPL-KLhWVABuqcvnLKHiZg__)' }}>

            <div className=''>
                <form 
                onSubmit={handleSubmit} 
                className="max-w-2xl mx-4 sm:ml-12 lg:ml-24 p-4 bg-transparent rounded-lg"
                >
                <h4 className="text-xl font-bold mb-4">Contact Us</h4>
                <h1 className="text-4xl font-bold mb-4">Make an Appointment</h1>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                    <label htmlFor="name" className="font-sans block text-gray-700 text-sm font-medium mb-2">Name*</label>
                    <input type="text" id="name" name="name" placeholder="Full Name" className="font-sans w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                    </div>
                    
                    <div>
                    <label htmlFor="email" className="font-sans block text-gray-700 text-sm font-medium mb-2">Email*</label>
                    <input type="email" id="email" name="email" placeholder="example@gmail.com" className="font-sans w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                    </div>
                    
                    <div>
                    <label htmlFor="department" className="font-sans block text-gray-700 text-sm font-medium mb-2">Department*</label>
                    <select id="department" name="department" className="font-sans w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                        <option value="">Please Select</option>
                        <option value="1">Department 1</option>
                        <option value="2">Department 2</option>
                        <option value="3">Department 3</option>
                    </select>
                    </div>
                    
                    <div>
                    <label htmlFor="time" className="font-sans block text-gray-700 text-sm font-medium mb-2">Time*</label>
                    <select id="time" name="time" className="font-sans w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                        <option value="">4:00 Available</option>
                        <option value="1">4:30 Available</option>
                        <option value="2">5:00 Available</option>
                    </select>
                    </div>
                </div>
                
                <div className="mb-4">
                    <label htmlFor="notes" className="font-sans block text-gray-700 text-sm font-medium mb-2">Notas</label>
                    <textarea id="notes" name="notes" rows={4} className="font-sans w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Write your notes here..." />
                </div>
                
                <button type="submit" className="bg-custom-brown hover:bg-yellow-800 text-white font-bold py-2 px-4 rounded">
                    Book Appointment
                </button>
                </form>
            </div>
        </div>
        <div className='flex flex-1 py-10 justify-between pr-16 mx-4 sm:ml-12 lg:ml-24 p-4'>
            <div className=''>
                <h1 className='text-3xl text-black mb-4'>Request A Free Consultation</h1>
                <p className='text-lg text-slate-400'>The quick fox jumps over the lazy dog</p>
            </div>
            <button
                    type="submit"
                    className="bg-custom-brown hover:bg-yellow-800 text-white font-bold px-10 rounded"
                >
                    Contact us
            </button>
        </div>        
        </>
    );
};

export default Cita;