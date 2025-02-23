import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="font-playfair text-4xl font-bold mb-8 text-center">About Boundary Lodge</h1>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <Image
            src="/2.jpg"
            alt="Boundary Lodge"
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>
        <div>
          <h2 className="font-playfair text-2xl font-semibold mb-4">Our Story</h2>
          <p className="font-lato mb-4">
            Established in 2012, Boundary Lodge has quickly become a premier destination for both business and leisure
            travelers in Harare. Our modern lodge offers a perfect blend of contemporary design and Zimbabwean
            hospitality.
          </p>
          <p className="font-lato mb-4">
            Our mission is to provide our guests with an unforgettable urban experience, allowing them to enjoy the
            vibrant city life of Harare while relaxing in comfort. From our state-of-the-art facilities to our
            breathtaking city views, every aspect of Boundary Lodge is designed to exceed expectations.
          </p>
          <h2 className="font-playfair text-2xl font-semibold mb-4">Our Location</h2>
          <p className="font-lato">
            Situated in the heart of Harare, Boundary Lodge is just steps away from the city's main business district,
            shopping centers, and cultural attractions. Our central location makes us the perfect choice for both
            business travelers and tourists looking to explore all that Harare has to offer.
          </p>
        </div>
      </div>
    </div>
  )
}