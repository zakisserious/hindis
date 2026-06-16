import { Metadata } from "next";
import PublicationClient from "./PublicationClient";

export const metadata: Metadata = {
  title: "Publication",
  description: "Explore Hindis' research and evidence-based insights into foundational learning and educational transformation.",
};

export default function PublicationPage() {
  return <PublicationClient />;
}
