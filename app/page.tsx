import { AccordionsSection, MainHeading, Wands } from "@/components/homePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Qwizard | Home",
  description: "The starting point for all qwizards",
}

export default function Home() {
  return (
    <>
      <MainHeading />
      <AccordionsSection />
      <Wands />
    </>
  )
}