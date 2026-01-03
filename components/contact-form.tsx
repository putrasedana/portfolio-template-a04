"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, CheckCircle2 } from "lucide-react"

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-20 space-y-4">
        <div className="p-4 rounded-full bg-primary/10 border border-primary/20">
          <CheckCircle2 className="h-12 w-12 text-primary" />
        </div>
        <h3 className="text-2xl font-bold text-foreground">Message Sent!</h3>
        <p className="text-muted-foreground text-center max-w-md">
          Thank you for reaching out. I'll get back to you as soon as possible.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium text-foreground">
          Name
        </label>
        <Input
          id="name"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          required
          className="bg-background/50"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-foreground">
          Email
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="your.email@example.com"
          value={formData.email}
          onChange={handleChange}
          required
          className="bg-background/50"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium text-foreground">
          Subject
        </label>
        <Input
          id="subject"
          name="subject"
          placeholder="What's this about?"
          value={formData.subject}
          onChange={handleChange}
          required
          className="bg-background/50"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell me about your project or idea..."
          value={formData.message}
          onChange={handleChange}
          required
          className="min-h-32 bg-background/50 resize-none"
          rows={6}
        />
      </div>

      <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group">
        <Send className="h-4 w-4 mr-2 transition-transform group-hover:translate-x-1" />
        Send Message
      </Button>
    </form>
  )
}
