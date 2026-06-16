import { Metadata } from "next";
import TeamClient from "./TeamClient";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the dedicated professionals leading Hindis' mission to transform foundational education.",
};

export default function TeamPage() {
  return <TeamClient />;
}
