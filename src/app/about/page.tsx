import { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Hindis' mission to pioneer quality foundational learning.",
};

export default function AboutPage() {
  return <AboutClient />;
}
