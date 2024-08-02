import React, { useState } from 'react';
import { FaPlay } from 'react-icons/fa';

const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="min-h-screen bg-cover 
    bg-center w-screen 
    bg-gradient-to-b
    from-color-fondo from-40% 
    to-azul-boton to-60%
    ">
        <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                    Who We Are
                </h2>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mt-4">
                    Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
                </p>
            </div>

            <div className="flex items-center justify-center w-full">
                {!isPlaying ? (
                    <div 
                        className="
                            bg-gradient-to-b 
                            from-white 
                            to-black 
                            flex 
                            items-center 
                            justify-center 
                            relative 
                            w-full 
                            h-60 
                            sm:h-80 
                            md:h-96 
                            lg:h-[400px] 
                            max-w-full 
                            p-4
                        "
                    >
                        <button
                            onClick={handlePlay}
                            className="bg-azul-boton text-white rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center focus:outline-none z-10"
                        >
                            <FaPlay />
                        </button>
                    </div>
                ) : (
                    <div className="w-full p-4">
                        <iframe
                            className="
                            flex 
                            items-center 
                            justify-center 
                            relative 
                            w-full 
                            h-60 
                            sm:h-80 
                            md:h-96 
                            lg:h-[400px] 
                            max-w-full                         
                            "
                            src="https://www.youtube.com/embed/pY2qMuptU6A?si=cdclriAGdUoqSPDr&autoplay=1"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                )}
            </div>
        </div>
    </div>

  );
};

export default VideoSection;
