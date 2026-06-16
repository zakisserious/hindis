import { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Services",
  description: "Innovative institution support, teacher workshops, and AI-powered education monitoring.",
};

export default function ServicesPage() {
  return <ServicesClient />;
}
