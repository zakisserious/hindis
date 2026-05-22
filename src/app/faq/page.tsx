import { Metadata } from "next";
import FAQClient from "./FAQClient";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Find answers to frequently asked questions about Hindis' foundational learning initiatives and partnerships.",
};

export default function FAQPage() {
  return <FAQClient />;
}
