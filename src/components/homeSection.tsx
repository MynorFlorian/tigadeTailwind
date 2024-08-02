import NavBarOpt from "./navBar"

const Home = () => {
    return (
        <>
            <div className="min-h-screen bg-cover bg-center w-screen bg-gray-100" style={{ backgroundImage: 'url(/bg_home.jpeg)' }}>
                <div className="flex flex-1">
                    <NavBarOpt />
                </div>
                <section id="home">
                    <div className="max-w-7xl mx-auto p-5 flex flex-col md:flex-row justify-around items-center">
                    <div className="text-center md:text-left">
                        <h1 className="text-6xl font-serif  md:text-5xl font-bold text-gray-900">
                        Help to reclaim your<br /> life and freedom
                        </h1>
                        <p className="mt-4 text-gray-600 font-sans">
                        We know how large objects will act, but things on a small scale.
                        </p>
                        <div className="mt-6 space-x-0 md:space-x-3 space-y-3 md:space-y-0">
                        <button className="font-sans bg-custom-brown hover:bg-amber-700 text-white font-bold rounded-full py-3 px-10">
                            Get Quote Now
                        </button>
                        <button className="font-sans bg-transparent hover:bg-yellow-700 text-custom-brown border border-custom-brown hover:text-white font-bold py-3 px-10 rounded-full">
                            Learn More
                        </button>
                        </div>
                    </div>
                    <div className="bg-white p-8 mt-8 md:mt-0 md:ml-10 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-sans text-gray-900 mb-4">Book Appointment</h2>
                        <form>
                        <div className="mb-4">
                            <label htmlFor="name" className="font-sans block text-gray-700 text-sm font-medium mb-2">Name*</label>
                            <input type="text" id="name" name="name" placeholder="Full Name" className="font-sans w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="font-sans block text-gray-700 text-sm font-medium mb-2">Email*</label>
                            <input type="email" id="email" name="email" placeholder="example@gmail.com" className="font-sans w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="department" className="font-sans block text-gray-700 text-sm font-medium mb-2">Department*</label>
                            <select id="department" name="department" className="font-sans w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                            <option value="">Please Select</option>
                            <option value="1">Department 1</option>
                            <option value="2">Department 2</option>
                            <option value="3">Department 3</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="time" className="font-sans block text-gray-700 text-sm font-medium mb-2">Time*</label>
                            <select id="time" name="time" className="font-sans w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                            <option value="">4:00 Available</option>
                            <option value="1">4:30 Available</option>
                            <option value="2">5:00 Available</option>
                            </select>
                        </div>
                        <button type="submit" className="font-sans bg-azul-boton text-white p-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full">
                            Book Appointment
                        </button>
                        </form>
                    </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home
