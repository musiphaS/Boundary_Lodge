import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea" // Ensure this path is correct or replace with the correct path

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="font-playfair text-4xl font-bold mb-12 text-center">Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="font-playfair text-2xl font-semibold mb-4">Get in Touch</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block font-lato text-sm font-medium text-gray-700">
                Name
              </label>
              <Input type="text" id="name" name="name" required className="font-lato" />
            </div>
            <div>
              <label htmlFor="email" className="block font-lato text-sm font-medium text-gray-700">
                Email
              </label>
              <Input type="email" id="email" name="email" required className="font-lato" />
            </div>
            <div>
              <label htmlFor="message" className="block font-lato text-sm font-medium text-gray-700">
                Message
              </label>
              <Textarea id="message" name="message" rows={4} required className="font-lato" />
            </div>
            <Button type="submit" className="font-lato">
              Send Message
            </Button>
          </form>
        </div>
        <div>
          <h2 className="font-playfair text-2xl font-semibold mb-4">Our Location</h2>
          <p className="font-lato mb-4">
            123 Samora Machel Avenue
            <br />
            Harare, Zimbabwe
          </p>
          <p className="font-lato mb-4">
            Phone: +263 24 2000001
            <br />
            Email: info@boundarylodge.com
          </p>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30371.77400331852!2d31.033245!3d-17.824858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a4f11a02cf0f%3A0xb4bae4e8c1a4b4c!2sHarare%2C%20Zimbabwe!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}