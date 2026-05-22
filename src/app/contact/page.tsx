import { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Hindis to learn more about our foundational learning initiatives or to explore partnership opportunities.",
};

export default function ContactPage() {
  return <ContactClient />;
}
