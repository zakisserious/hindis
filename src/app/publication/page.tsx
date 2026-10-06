import { Metadata } from "next";
import PublicationClient from "./PublicationClient";

export const metadata: Metadata = {
  title: "Publication",
  description: "Hindis research on teacher training, enrolment and foundational learning.",
};

export default function PublicationPage() {
  return <PublicationClient />;
}
