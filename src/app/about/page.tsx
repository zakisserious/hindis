import { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us",
  description: "Who Hindis is, how we work, and what we are trying to change.",
};

export default function AboutPage() {
  return <AboutClient />;
}
