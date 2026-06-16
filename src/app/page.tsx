import { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Home",
  description: "Pioneering quality foundational learning through innovative, technology-driven teaching.",
};

export default function HomePage() {
  return <HomeClient />;
}
