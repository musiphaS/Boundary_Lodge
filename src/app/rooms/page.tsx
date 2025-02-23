import Image from "next/image"
import Link from "next/link"
import { Button } from "../../components/ui/button"

const rooms = [
  {
    name: "Executive Suite",
    description: "Spacious suite with a separate living area and city views.",
    image: "/3.jpg",
    price: 20,
  },
  {
    name: "Deluxe Room",
    description: "Comfortable room with modern amenities, perfect for business travelers.",
    image: "/2.jpg",
    price: 30,
  },
  {
    name: "Penthouse",
    description: "Luxurious penthouse with panoramic views of Harare.",
    image: "/1.jpg",
    price: 40,
  },
]

export default function RoomsPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="font-playfair text-4xl font-bold mb-12 text-center">Our Rooms</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {rooms.map((room) => (
          <div key={room.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              src={room.image || "/placeholder.svg"}
              alt={room.name}
              width={400}
              height={300}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="font-playfair text-2xl font-semibold mb-2">{room.name}</h2>
              <p className="font-lato text-gray-600 mb-4">{room.description}</p>
              <p className="font-lato text-lg font-bold mb-4">${room.price} / night</p>
              <Link href="/booking">
                <Button className="w-full font-lato">Book Now</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}