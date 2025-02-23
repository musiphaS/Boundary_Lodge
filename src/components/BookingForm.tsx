"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { bookRoom } from "@/app/actions"
import { Select } from "@/components/ui/select"

export default function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(event.currentTarget)
    await bookRoom(formData)

    setIsSubmitting(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <Input type="text" id="name" name="name" required />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <Input type="email" id="email" name="email" required />
      </div>
      <div>
        <label htmlFor="room" className="block text-sm font-medium text-gray-700">
          Room Type
        </label>
        <Select id="room" name="room" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
          <option value="deluxe">Deluxe Suite</option>
          <option value="family">Family Cabin</option>
          <option value="cozy">Cozy Cottage</option>
        </Select>
      </div>
      <div>
        <label htmlFor="checkin" className="block text-sm font-medium text-gray-700">
          Check-in Date
        </label>
        <Input type="date" id="checkin" name="checkin" required />
      </div>
      <div>
        <label htmlFor="checkout" className="block text-sm font-medium text-gray-700">
          Check-out Date
        </label>
        <Input type="date" id="checkout" name="checkout" required />
      </div>
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Booking..." : "Book Now"}
      </Button>
    </form>
  )
}