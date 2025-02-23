import BookingForm from "@/components/BookingForm"

export default function BookingPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="font-playfair text-4xl font-bold mb-8 text-center">Book Your Stay</h1>
      <div className="max-w-md mx-auto">
        <BookingForm />
      </div>
    </div>
  )
}