"use client"

import React from "react";
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown, Wifi, Coffee, Plane } from "lucide-react"

export default function Home() {

  // Cast the icon to a React functional component that accepts SVG props.
  const ChevronDownIcon = ChevronDown as React.FC<React.SVGProps<SVGSVGElement>>;

  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-playfair text-5xl md:text-7xl font-bold mb-4"
          >
            Welcome to Boundary Lodge
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="font-lato text-xl md:text-2xl mb-8"
          >
            Experience modern luxury in the heart of Harare
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}>
            <Button asChild className="font-lato">
              <Link href="/BookingForm">Book Your Stay</Link>
            </Button>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          {React.createElement(ChevronDownIcon, {
            className: "text-white w-12 h-12 animate-bounce"
          })}
        </motion.div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-center mb-12">Our Luxurious Rooms</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Executive Suite", image: "/1.jpg" },
              { name: "Deluxe Room", image: "/2.jpg" },
              { name: "Penthouse", image: "/3.jpg" },
            ].map((room) => (
              <motion.div
                key={room.name}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <Image
                  src={room.image || "/placeholder.svg"}
                  alt={room.name}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-playfair text-2xl font-semibold mb-2">{room.name}</h3>
                  <p className="font-lato text-gray-600 mb-4">
                    Experience modern comfort in our {room.name.toLowerCase()}.
                  </p>
                  <Button asChild>
                    <Link href="/rooms">View Details</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-center mb-12">Why Choose Boundary Lodge</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Wifi,
                title: "High-Speed Wi-Fi",
                description: "Stay connected with complimentary high-speed internet throughout the lodge.",
              },
              {
                icon: Coffee,
                title: "24/7 Room Service",
                description: "Enjoy gourmet meals and snacks in the comfort of your room, any time of day.",
              },
              {
                icon: Plane,
                title: "Easier Travel",
                description: "Conveniently located near Harare International Airport with shuttle service available.",
              },
            ].map((feature, index) => {
              // Cast the icon to a React functional component with SVG props.
              const IconComponent = feature.icon as unknown as React.FC<React.SVGProps<SVGSVGElement>>;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-lg shadow-md text-center"
                >
                  <IconComponent className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-playfair text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="font-lato text-gray-600">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-4xl font-bold mb-6">Experience Urban Luxury</h2>
              <p className="font-lato text-lg mb-8">
                Located in the heart of Harare, Boundary Lodge offers the perfect blend of modern comfort and urban
                excitement. Immerse yourself in the vibrant city life while enjoying our top-notch amenities and create
                unforgettable memories.
              </p>
              <Button asChild>
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/Harare-8.jpg"
                alt="Harare cityscape"
                width={300}
                height={400}
                className="rounded-lg"
              />
              <Image
                src="/4.jpg"
                alt="Lodge interior"
                width={300}
                height={400}
                className="rounded-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-4xl font-bold mb-8">What Our Guests Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "John D.", quote: "An unforgettable stay. The perfect blend of luxury and urban convenience." },
              { name: "Sarah M.", quote: "The staff went above and beyond to make our business trip comfortable." },
              {
                name: "Michael L.",
                quote: "Stunning views of Harare and top-notch amenities. We'll definitely be back!",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <p className="font-lato text-gray-600 mb-4">"{testimonial.quote}"</p>
                <p className="font-playfair font-semibold">{testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-center mb-12">Explore Harare</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "National Gallery of Zimbabwe",
                image: "/5.jpg",
                description: "Discover local and international art just a short walk from the lodge.",
              },
              {
                title: "Harare Gardens",
                image: "/6.jpg",
                description: "Enjoy a peaceful stroll in this beautiful park, located in the city center.",
              },
              {
                title: "Sam Levy's Village",
                image: "/7.jpg",
                description: "Experience upscale shopping and dining at this nearby shopping complex.",
              },
            ].map((attraction, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-50 rounded-lg shadow-md overflow-hidden"
              >
                <Image
                  src={attraction.image || "/placeholder.svg"}
                  alt={attraction.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-playfair text-xl font-semibold mb-2">{attraction.title}</h3>
                  <p className="font-lato text-gray-600">{attraction.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
