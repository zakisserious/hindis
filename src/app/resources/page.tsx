import { Metadata } from "next";
import ResourcesClient from "./ResourcesClient";

export const metadata: Metadata = {
  title: "Resources",
  description: "Educational resources and research documents published by Hindis.",
};

export default function ResourcesPage() {
  return <ResourcesClient />;
}
