
'use client';

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import { FaStar } from 'react-icons/fa';

export default function Home() {
  const testimonials = [
    {
      id: 1,
      name: "Muhammad Al mehari",
      text: "I have tried many salons in Dubai, but nothing compares to the service at Scissors VIP. Hammad really knows his craft — precise, professional, and genuinely kind.",
    },
    {
      id: 2,
      name: "Obaid khamis",
      text: "I booked their home service and was blown away. Same premium quality as the salon, but in the comfort of my living room. Game-changer.",
    },
    {
      id: 3,
      name: "Yaqoob al suwadi",
      text: "Hammad has been cutting my hair for over 5 years now. His attention to detail is unmatched. Every cut feels personal and perfect.",
    },
    {
      id: 4,
      name: "Khalid ibn Saeed",
      text: "Booked a last-minute home visit and was amazed by how smoothly everything went. On time, fully equipped, and left me looking sharp.",
    },
    {
      id: 5,
      name: "mansoor meshar",
      text: "Finally, a men&apos;s salon in Dubai that understands premium service. The vibe, the professionalism, the results — 10/10.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative h-[60vh] md:h-[70vh] bg-cover bg-center"
        style={{ backgroundImage: "url('home/front.jpg')" }}
      >
        <Navbar />

        <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Redefining Men&apos;s Grooming in Dubai
          </h1>
          <p className="text-base md:text-lg mb-4">
            Salon Experience, Right at Your Doorstep
          </p>

          <Link
            href="https://wa.me/971501374524?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20your%20salon." target="_blank"rel="noopener noreferrer"
            className="bg-white text-black px-6 py-2 rounded hover:bg-black hover:text-white transition font-bold cursor-pointer" > Book an Appointment </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="flex flex-col md:flex-row items-center gap-8 px-6 py-8">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-700 mb-4">
            It all began with a pair of scissors and a dream. Hammad, known as “Ahmad” among his
            local clients in Dubai, stepped into the world of grooming nearly two decades ago. With
            nothing but a strong work ethic and a passion for style, he began shaping not just
            haircuts, but confidence.
          </p>
          <p className="text-gray-700">
            Over the years, his skill and dedication earned him a reputation. Clients didn&apos;t just
            come for a haircut; they came for the experience, a professional who listened, styled
            with precision, and treated every customer like a VIP.
          </p>
          <Link href="/about">
            <button  type="submit" className="border border-black px-6 py-3 rounded-md hover:bg-black hover:text-white transition mt-7"  > About us </button> </Link>
        </div>

        <div className="md:w-1/2">
          <Image  src="/Non.jpg"  alt="About us" width={300} height={400}className="rounded-lg shadow-lg object-cover w-full h-auto" />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Testimonials</h2>

        <Swiper spaceBetween={30}  slidesPerView={1}  loop={true} autoplay={{   delay: 3000,  disableOnInteraction: false, }}  pagination={{ clickable: true }} modules={[Autoplay, Pagination]} breakpoints={{ 768: { slidesPerView: 2 },1024: { slidesPerView: 3 },  }} >


          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col justify-between">
                <div className="text-gray-700 text-sm mb-4 italic">
                  “{testimonial.text}”
                </div>
                <div className="mt-auto">
                  <h3 className="text-lg font-semibold text-black mb-1">
                    — {testimonial.name}
                  </h3>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, index) => (
                      <FaStar key={index} />
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}
