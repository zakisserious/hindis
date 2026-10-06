import { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Home",
  description: "Hindis trains teachers and supplies books so children learn to read, write and count.",
};

export default function HomePage() {
  return <HomeClient />;
}
