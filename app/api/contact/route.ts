import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { firstName, lastName, email, inquiryType, message } = data

    // Basic validation
    if (!firstName || !lastName || !email || !inquiryType || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address" }, { status: 400 })
    }

    // Prepare email content
    const subject = `ZENITH MUN Contact Form: ${inquiryType}`
    const emailBody = `
      Name: ${firstName} ${lastName}
      Email: ${email}
      Inquiry Type: ${inquiryType}
      Message: ${message}
    `

    // Log the email that would be sent (for debugging)
    console.log("Email would be sent to:", "contactofficial.zenith@gmail.com")
    console.log("Subject:", subject)
    console.log("Body:", emailBody)

    // In a real implementation, you would use the EMAIL_USER and EMAIL_PASSWORD
    // environment variables to send an email via an API or service

    // For now, we'll simulate a successful email send
    // You can replace this with your preferred email sending method

    // Return success response
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to send message. Please try again later." }, { status: 500 })
  }
}

