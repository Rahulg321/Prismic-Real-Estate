"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
    alert("Message sent successfully!");
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName" className="sr-only">
              First Name
            </Label>
            <Input
              id="firstName"
              name="firstName"
              placeholder="First Name*"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="border-gray-300 h-12"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName" className="sr-only">
              Last Name
            </Label>
            <Input
              id="lastName"
              name="lastName"
              placeholder="Last Name*"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="border-gray-300 h-12"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="sr-only">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Email*"
            value={formData.email}
            onChange={handleChange}
            required
            className="border-gray-300 h-12"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="sr-only">
            Phone Number
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="border-gray-300 h-12"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="sr-only">
            Your Message
          </Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="border-gray-300 min-h-[160px]"
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-amber-400 hover:bg-amber-500 text-white font-medium py-4 h-auto"
        >
          SEND MESSAGE
        </Button>
      </form>
    </div>
  );
}
