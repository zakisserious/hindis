import { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Our Projects",
  description: "Explore Hindis' impact stories, from diaspora dialogues to the distribution of 41,000+ targeted resources.",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
