import { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Home",
  description: "Pioneering quality foundational learning in Somalia. Together, we are building a future of competence, productivity, and compassion.",
};

export default function HomePage() {
  return <HomeClient />;
}
