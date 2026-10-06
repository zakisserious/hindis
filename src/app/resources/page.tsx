import { Metadata } from "next";
import ResourcesClient from "./ResourcesClient";

export const metadata: Metadata = {
  title: "Research & Resources",
  description: "Research, papers and reports produced by Hindis and our partners, including our study with Somali National University.",
};

export default function ResourcesPage() {
  return <ResourcesClient />;
}
