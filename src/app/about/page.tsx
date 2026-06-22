import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "Our Story â€” AfghanJewellers",
  description:
    "The story behind AfghanJewellers â€” a labor of love, a celebration of handcraft, and a tribute to the beauty found in nature.",
};

export default function AboutPage() {
  return <AboutClient />;
}
