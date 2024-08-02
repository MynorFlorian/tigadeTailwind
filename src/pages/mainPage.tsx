import Abogados from "../components/abogados"
import Cita from "../components/cita"
import Footer from "../components/footer"
import Home from "../components/homeSection"
import NavBarOpt from "../components/navBar"
import PracticeAdvice from "../components/practiceAdvice"
import VideoSection from "../components/videoSection"
import WhatClientSay from "../components/whatClientSay"

const MainPage = () => {
    return(
        <>
            <div>

                <Home />

                <PracticeAdvice />

                <VideoSection />

                <WhatClientSay />

                <Abogados />

                <Cita />
                
                {/* 
                <section id="product" className="scroll-mt-16 h-screen flex items-center justify-center bg-gray-100">
                    <h1 className="text-4xl font-bold text-blue-500">PRODUCT</h1>
                </section>

                <section id="contact" className="scroll-mt-16 h-screen flex items-center justify-center bg-gray-100">
                    <h1 className="text-4xl font-bold text-blue-500">CONTACT</h1>
                </section> */}
            </div>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default MainPage
