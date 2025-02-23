import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"


const SocialIcons = {
  Facebook: Facebook as React.ComponentType<{ className?: string }>,
  Instagram: Instagram as React.ComponentType<{ className?: string }>,
  Twitter: Twitter as React.ComponentType<{ className?: string }>,
};

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-playfair text-2xl font-bold mb-4">Boundary Lodge</h3>
            <p className="font-lato mb-2">69 Boundary Road, Harare</p>
            <p className="font-lato mb-4">Phone: (0242) 776946</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-stone-300 transition duration-300">
                <SocialIcons.Facebook  className="w-6 h-6"/>
              </a>
              <a href="#" className="text-white hover:text-stone-300 transition duration-300">
                <SocialIcons.Instagram  className="w-6 h-6"/>
              </a>
              <a href="#" className="text-white hover:text-stone-300 transition duration-300">
                <SocialIcons.Twitter  className="w-6 h-6"/>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-playfair text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="font-lato space-y-2">
              <li>
                <Link href="/about" className="hover:text-stone-300 transition duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/rooms" className="hover:text-stone-300 transition duration-300">
                  Our Rooms
                </Link>
              </li>
              <li>
                <Link href="/booking" className="hover:text-stone-300 transition duration-300">
                  Book Now
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-stone-300 transition duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-playfair text-xl font-semibold mb-4">Newsletter</h4>
            <p className="font-lato mb-4">Stay updated with our latest offers and events in Harare.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="font-lato flex-grow px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-stone-500"
              />
              <button
                type="submit"
                className="bg-stone-700 text-white px-4 py-2 rounded-r-md hover:bg-stone-600 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-stone-700 text-center">
          <p className="font-lato text-sm">&copy; {new Date().getFullYear()} Boundary Lodge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}