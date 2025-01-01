import Top_Banner from "@/Components/Top_Banner";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const contactInfo = [
  {
    icon: <MapPin className="h-8 w-8 text-blue-600" />,
    title: "Location",
    details: ["Sunshine Business Park Sector-94, Poland"],
  },
  {
    icon: <Phone className="h-8 w-8 text-blue-600" />,
    title: "Contact",
    details: ["+88(0) 555-0108", "+88(0) 555-01117"],
  },
  {
    icon: <Mail className="h-8 w-8 text-blue-600" />,
    title: "Email",
    details: ["Techco@example.com", "gmail.@example.com"],
  },
  {
    icon: <Clock className="h-8 w-8 text-blue-600" />,
    title: "Visit Between",
    details: ["Mon - Sat: 8.00-5.00", "Sunday: Closed"],
  },
];
export default function page() {
  return (
    <main>
      <Top_Banner title="Contact Us" subTitle="Contact" highlightName="Us 🥰" />
      <div className="mx-auto bg-blue-50 px-mobile py-12 md:px-spacing 2xl:px-spacing_2">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white p-8 text-center shadow-sm"
            >
              <div className="mb-4 flex items-center justify-center">
                <div className="rounded-full bg-blue-100 p-3">{info.icon}</div>
              </div>
              <h3 className="mb-2 mt-3 text-xl font-semibold">{info.title}</h3>
              {info.details.map((detail, idx) => (
                <p key={idx} className="text-lg font-medium text-gray-600">
                  {detail}
                </p>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-bold opacity-75">
              Send Us A Message
            </h2>
            <p className="mb-8 text-gray-600">
              Give us chance to serve and bring magic to your brand.
            </p>

            <form className="space-y-6">
              <div className="flex items-center gap-4">
                <input
                  className="h-14 w-full rounded-lg bg-white px-5 focus:outline-none"
                  placeholder="Full Name*"
                  type="text"
                  required
                  maxLength={15}
                />
                <input
                  className="h-14 w-full rounded-lg bg-white px-5 focus:outline-none"
                  placeholder="Your Email*"
                  type="email"
                  required
                  maxLength={15}
                />
              </div>
              <input
                className="h-14 w-full rounded-lg bg-white px-5 focus:outline-none"
                placeholder="Your Phone*"
                type="tel"
                required
                maxLength={15}
              />
              <textarea
                rows={5}
                className="w-full rounded-lg bg-white p-5 focus:outline-none"
                placeholder="Message*"
                required
              />

              <button
                type="submit"
                className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>

          <div className="h-[400px] w-full rounded-lg bg-gray-100">
            {/* Map placeholder - replace with actual map implementation */}
            <iframe
              className="h-full w-full"
              frameBorder="0"
              scrolling="no"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps trackers</a>
            </iframe>
          </div>
        </div>
      </div>
    </main>
  );
}
