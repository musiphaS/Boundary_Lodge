import Image from "next/image"
import { Wifi, Coffee, Briefcase, Utensils, Dumbbell, Car, Users, Sun, LucideIcon } from "lucide-react/icons"


interface Amenity {
  icon: LucideIcon;
  title: string;
  description: string;
}

const amenities: Amenity[] = [
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
    icon: Briefcase,
    title: "Business Center",
    description: "Access our fully-equipped business center for all your professional needs.",
  },
  {
    icon: Utensils,
    title: "Fine Dining",
    description: "Savor exquisite local and international cuisine at our on-site restaurant.",
  },
  {
    icon: Dumbbell,
    title: "Fitness Center",
    description: "Stay in shape with our state-of-the-art gym equipment and fitness classes.",
  },
  {
    icon: Car,
    title: "Valet Parking",
    description: "Enjoy the convenience of our complimentary valet parking service.",
  },
  {
    icon: Users,
    title: "Conference Facilities",
    description: "Host successful meetings and events in our modern conference rooms.",
  },
  {
    icon: Sun,
    title: "Rooftop Terrace",
    description: "Unwind with panoramic views of Harare from our beautiful rooftop terrace.",
  },
]

export default function AmenitiesPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="font-playfair text-4xl font-bold mb-12 text-center">Our Amenities</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {amenities.map((amenity, index) => {
          const Icon = amenity.icon as React.ComponentType<{ className?: string }>;
          return (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <Icon className="w-12 h-12 mb-4 text-primary" />
              <h2 className="font-playfair text-2xl font-semibold mb-2">{amenity.title}</h2>
              <p className="font-lato text-gray-600">{amenity.description}</p>
            </div>
          );
        })}
      </div>
      <div className="mt-16">
        <h2 className="font-playfair text-3xl font-bold mb-8 text-center">Experience Luxury</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Image src="/luxury-lobby.jpg" alt="Luxury Lobby" width={600} height={400} className="rounded-lg shadow-md" />
          <div>
            <h3 className="font-playfair text-2xl font-semibold mb-4">Unparalleled Comfort</h3>
            <p className="font-lato text-gray-600 mb-4">
              At Boundary Lodge, we believe in providing our guests with the utmost comfort and luxury. From the moment
              you step into our elegant lobby, you'll be surrounded by sophisticated design and attentive service.
            </p>
            <p className="font-lato text-gray-600">
              Our commitment to excellence extends to every aspect of your stay, ensuring that whether you're here for
              business or leisure, your experience at Boundary Lodge will be nothing short of exceptional.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}