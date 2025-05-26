import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import React, { useState } from "react";
import cn from "@/lib/utils";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
const Contact = () => {
  let [submitting, setSubmitting] = useState(false);
  const sumbitHandler = (e) => {
    e.preventDefault();
    setSubmitting(true);

    emailjs
      .sendForm(
        "service_q53gdo6",
        "template_opg52a7",
        e.target,
        "6d1JaXP3Cn4itz3qV"
      )
      .then(() => {
        toast.success("Message Sent!\nI'll get back to you soon.");
        setSubmitting(false);
        e.target.reset();
      })
      .catch((error) => {
        toast.error("Something went wrong. Please try again.");
        console.error("EmailJS Error:", error);
        setSubmitting(false);
      });
  };
  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Get In
          <span className="text-primary"> Touch</span>
        </h2>
        <p className="text-center text-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-11">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6 justify-center">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    href="mailto:Imtiaz.Dev1@gmail.com"
                  >
                    Imtiaz.Dev2@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    href="tel:923111234567"
                  >
                    +92 (311) 123-4567
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <a
                    href="https://shorturl.at/7ibtD"
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    Karachi, Sindh, Pakistan
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me!</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  className="hover:text-primary duration-300 transition-colors"
                  target="_blank"
                  href="https://shorturl.at/Venrc"
                >
                  <Linkedin />
                </a>
                <a
                  className="hover:text-primary duration-300 transition-colors"
                  target="_blank"
                  href="https://www.instagram.com/maybe_imtiazz/"
                >
                  <Instagram />
                </a>
                <a
                  className="hover:text-primary duration-300 transition-colors"
                  target="_blank"
                  href="https://www.instagram.com/maybe_imtiazz/"
                >
                  <Facebook />
                </a>
                <a
                  target="_blank"
                  href="https://github.com/Imtiaz-Ahmed01"
                  className="hover:text-primary duration-300 transition-colors"
                >
                  <Github />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form onSubmit={sumbitHandler}>
              <div>
                <label
                  htmlFor="name"
                  className="font-medium text-sm mb-2 block"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-primary focus:rang-2"
                  placeholder="Imtiaz Ahmed..."
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="font-medium text-sm my-2 block"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-primary focus:rang-2"
                  placeholder="john@gmail.com..."
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="font-medium text-sm my-2 block"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="resize-none w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-primary focus:rang-2"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>
              <button
                disabled={submitting}
                type="submit"
                className={cn(
                  "cosmic-button mt-5 w-full flex items-center justify-center gap-2",
                  submitting && "bg-primary/50"
                )}
              >
                {submitting ? "Sending.." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
