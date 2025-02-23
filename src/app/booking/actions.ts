"use server"

import { redirect } from "next/navigation"

export async function bookRoom(formData: FormData) {
  const name = formData.get("name")
  const email = formData.get("email")
  const room = formData.get("room")
  const checkin = formData.get("checkin")
  const checkout = formData.get("checkout")

  // Here you would typically save this information to a database
  // For now, we'll just log it
  console.log("Booking received:", { name, email, room, checkin, checkout })

  // In a real application, you'd want to handle errors and provide feedback

  // Redirect to a confirmation page
  redirect("/booking/confirmation")
}
