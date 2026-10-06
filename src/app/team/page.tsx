import { Metadata } from "next";
import TeamClient from "./TeamClient";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the people who lead Hindis' teacher training and research.",
};

export default function TeamPage() {
  return <TeamClient />;
}
