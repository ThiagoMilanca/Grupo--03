"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

function PulpoDesktop() {
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    setHovered(true);
  }, []);

  return (
    <div className="min-h-screen flex justify-center bg-white mb-40">
      <div className="relative w-full max-w-4xl">
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src="https://res.cloudinary.com/dfaej4bi8/image/upload/v1726104809/Logo_nhy6eh.png"
            alt="Travel Agency Logo"
            width={300}
            height={300}
            className="w-80 h-80"
          />
        </div>
        <div
          className={`absolute transition-all duration-300 ${
            hovered ? "opacity-100" : "opacity-0"
          } top-[60%] left-[72%] transform -translate-x-1/2 -translate-y-1/2`}
        >
          <Link href="/products?activities=pesca+deportiva">
            <div className="flex items-center justify-center space-x-2 p-4 bg-gray-100 rounded-full hover:scale-110 duration-300 hover:bg-orange-400 ">
              <img
                src="https://res.cloudinary.com/dfaej4bi8/image/upload/v1726104815/Pesca_lu4npb.jpg"
                alt="Pesca Deportiva"
                width={1200}
                height={800}
                className="w-24 h-24 rounded-full object-fill-cover mr-2"
              />
              <span className="text-lg font-semibold w-72 h-full ">
                Pesca deportiva
              </span>
            </div>
          </Link>
        </div>

        <div
          className={`absolute transition-all duration-400 ${
            hovered ? "opacity-100" : "opacity-0"
          } top-[30%] left-[70%] transform -translate-x-1/2 -translate-y-1/2`}
        >
          <Link href="/products?activities=avistamiento+de+aves">
            <div className="flex items-center justify-center space-x-2 p-4 bg-gray-100 rounded-full hover:scale-110 duration-300 hover:bg-orange-400 ">
              <img
                src="https://res.cloudinary.com/dfaej4bi8/image/upload/v1726104782/Aves_gaaej0.jpg"
                alt="Avistamiento de Aves"
                width={1200}
                height={800}
                className="w-24 h-24 rounded-full object-fill-cover mr-2"
              />
              <span className="text-lg font-semibold w-72 h-full">
                Avistamiento de aves
              </span>
            </div>
          </Link>
        </div>

        <div
          className={`absolute transition-all duration-500 ${
            hovered ? "opacity-100" : "opacity-0"
          } top-[7%] left-[40%] transform -translate-x-1/2 -translate-y-1/2`}
        >
          <Link href="/products">
            <div className="flex items-center justify-center space-x-2 p-4 bg-gray-100 rounded-full hover:scale-110 duration-300 hover:bg-orange-400 ">
              <img
                src="https://res.cloudinary.com/dfaej4bi8/image/upload/v1726110337/p9ujsgut3oomp4lu3qaz.jpg"
                alt="Vuelos"
                width={1200}
                height={800}
                className="w-24 h-24 rounded-full object-fill-cover mr-2"
              />
              <span className="text-lg font-semibold w-48 h-full">Vuelos</span>
            </div>
          </Link>
        </div>

        <div
          className={`absolute transition-all duration-600 ${
            hovered ? "opacity-100" : "opacity-0"
          } top-[85%] left-[38%] transform -translate-x-1/2 -translate-y-1/2`}
        >
          <Link href="/products?rentals=hospedaje">
            <div className="flex items-center justify-center space-x-2 p-4 bg-gray-100 rounded-full hover:scale-110 duration-300 hover:bg-orange-400 ">
              <img
                src="https://res.cloudinary.com/dfaej4bi8/image/upload/v1726099531/Alojamiento_gw7ju2.jpg"
                alt="Alojamientos"
                width={1200}
                height={800}
                className="w-24 h-24 rounded-full object-fill-cover mr-2"
              />
              <span className="text-lg font-semibold w-48 h-full">
                Alojamientos
              </span>
            </div>
          </Link>
        </div>

        <div
          className={`absolute transition-all duration-700 ${
            hovered ? "opacity-100" : "opacity-0"
          } top-[60%] left-[3%] transform -translate-x-1/2 -translate-y-1/2`}
        >
          <Link href="/products?medicalServices=diseño+de+sonrisa">
            <div className="flex items-center justify-center space-x-2 p-4 bg-gray-100 rounded-full -ml-10  hover:scale-110 duration-300 hover:bg-orange-400  ">
              <img
                src="https://res.cloudinary.com/dfaej4bi8/image/upload/v1726104783/Dise%C3%B1o2_gxupmt.jpg"
                alt="Diseño Sonrisa"
                width={1200}
                height={800}
                className="w-24 h-24 rounded-full object-fill-cover mr-2"
              />
              <span className="text-lg font-semibold w-40 h-full ">
                Diseño de Sonrisa
              </span>
            </div>
          </Link>
        </div>

        <div
          className={`absolute transition-all duration-800 ${
            hovered ? "opacity-100" : "opacity-0"
          } top-[30%] left-[3%] transform -translate-x-1/2 -translate-y-1/2`}
        >
          <Link href="/products?rentals=transporte">
            <div className="flex items-center justify-center space-x-2 p-4 bg-gray-100 rounded-full -ml-10 hover:scale-110 duration-300 hover:bg-orange-400 ">
              <img
                src="https://res.cloudinary.com/dfaej4bi8/image/upload/v1726104823/Renta_ua945p.jpg"
                alt="Renta de Carros"
                width={1200}
                height={800}
                className="w-24 h-24 rounded-full object-fill-cover mr-2"
              />
              <span className="text-lg font-semibold w-40 h-full">
                Renta de carros
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

function PulpoMobile() {
  return (
    <div className="flex flex-col items-center bg-white mb-40 lg:flex-row lg:my-10 lg:min-h-full">
      <div className="w-full">
        <div className="flex justify-center mb-8 lg:mb-0 max-lg:w-2/3 max-lg:justify-end">
          <img
            src="https://res.cloudinary.com/dfaej4bi8/image/upload/v1726104809/Logo_nhy6eh.png"
            alt="Travel Agency Logo"
            width={300}
            height={300}
            className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 "
          />
        </div>

        {/* Resto del código del segundo Pulpo con diseño responsive */}
        <div className="flex flex-col space-y-4">
          <Link href="/products?activities=pesca+deportiva">
            <div className="flex justify-center items-center">
              <div className="flex items-center justify-center space-x-2 p-4 w-1/4 bg-gray-100 rounded-full hover:scale-105 duration-300 hover:bg-orange-400 max-lg:w-2/3">
                <img
                  src="https://res.cloudinary.com/dfaej4bi8/image/upload/v1726104815/Pesca_lu4npb.jpg"
                  alt="Pesca Deportiva"
                  width={300}
                  height={300}
                  className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full object-cover"
                />
                <span className="text-base sm:text-lg font-semibold w-full">
                  Pesca deportiva
                </span>
              </div>
            </div>
          </Link>

          <Link href="/products?activities=avistamiento+de+aves">
            <div className="flex justify-center items-center">
              <div className="flex items-center justify-center space-x-2 p-4 w-1/4 bg-gray-100 rounded-full hover:scale-105 duration-300 hover:bg-orange-400 max-lg:w-2/3">
                <img
                  src="https://res.cloudinary.com/dfaej4bi8/image/upload/v1726104782/Aves_gaaej0.jpg"
                  alt="Avistamiento de Aves"
                  width={300}
                  height={300}
                  className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full object-cover"
                />
                <span className="text-base sm:text-lg font-semibold w-full">
                  Avistamiento de aves
                </span>
              </div>
            </div>
          </Link>

          <Link href="/products">
            <div className="flex justify-center items-center">
              <div className="flex items-center justify-center space-x-2 p-4 w-1/4 bg-gray-100 rounded-full hover:scale-105 duration-300 hover:bg-orange-400 max-lg:w-2/3">
                <img
                  src="https://res.cloudinary.com/dfaej4bi8/image/upload/v1726110337/p9ujsgut3oomp4lu3qaz.jpg"
                  alt="Vuelos"
                  width={300}
                  height={300}
                  className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full object-cover"
                />
                <span className="text-base sm:text-lg font-semibold w-full">
                  Vuelos
                </span>
              </div>
            </div>
          </Link>

          <Link href="/products?rentals=hospedaje">
            <div className="flex justify-center items-center">
              <div className="flex items-center justify-center space-x-2 p-4 w-1/4 bg-gray-100 rounded-full hover:scale-105 duration-300 hover:bg-orange-400 max-lg:w-2/3">
                <img
                  src="https://res.cloudinary.com/dfaej4bi8/image/upload/v1726099531/Alojamiento_gw7ju2.jpg"
                  alt="Alojamientos"
                  width={300}
                  height={300}
                  className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full object-cover"
                />
                <span className="text-base sm:text-lg font-semibold w-full">
                  Alojamientos
                </span>
              </div>
            </div>
          </Link>

          <Link href="/products?medicalServices=diseño+de+sonrisa">
            <div className="flex justify-center items-center">
              <div className="flex items-center justify-center space-x-2 p-4 w-1/4 bg-gray-100 rounded-full hover:scale-105 duration-300 hover:bg-orange-400 max-lg:w-2/3">
                <img
                  src="https://res.cloudinary.com/dfaej4bi8/image/upload/v1726104783/Dise%C3%B1o2_gxupmt.jpg"
                  alt="Diseño Sonrisa"
                  width={300}
                  height={300}
                  className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full object-cover"
                />
                <span className="text-base sm:text-lg font-semibold w-full">
                  Diseño de Sonrisa
                </span>
              </div>
            </div>
          </Link>

          <Link href="/products?rentals=transporte">
            <div className="flex justify-center items-center">
              <div className="flex items-center justify-center space-x-2 p-4 w-1/4 bg-gray-100 rounded-full hover:scale-105 duration-300 hover:bg-orange-400 max-lg:w-2/3">
                <img
                  src="https://res.cloudinary.com/dfaej4bi8/image/upload/v1726104823/Renta_ua945p.jpg"
                  alt="Renta de Carros"
                  width={300}
                  height={300}
                  className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full object-cover"
                />
                <span className="text-base sm:text-lg font-semibold w-full">
                  Renta de carros
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Pulpo() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? <PulpoMobile /> : <PulpoDesktop />;
}
