<<<<<<< HEAD
import Footer from "@/components/Footer";
import { Hero } from "@/components/Hero";
import "./globals.css";

import Mainnavbar from "@/components/Navbar";
import Dashboard from "@/components/Dashboard";
=======
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import ModernPricing from "@/components/ModernPricing";
import { NavbarDemo } from "@/components/Navbar";
import { Services } from "@/components/Services";
import SubscriptionPlans from "@/components/SubscriptionPlans";
import Image from "next/image";
>>>>>>> f0ca30c (Checkpoint after AI response (Message ID: e2e6e405-d84d-4ff3-b98c-6082fa5d64f7))

export default function Home() {
  return (
    <>
<<<<<<< HEAD
      <Mainnavbar />
      <Hero />
      <Footer />
=======
      <NavbarDemo />
      <Hero />
      <Services />
      <Contact />
<<<<<<< HEAD
>>>>>>> f0ca30c (Checkpoint after AI response (Message ID: e2e6e405-d84d-4ff3-b98c-6082fa5d64f7))
=======
      <SubscriptionPlans />
>>>>>>> e7ad4e5 (Checkpoint after AI response (Message ID: 11b20729-1581-47e8-aae3-761f59b13c7c))
    </>
  );
}
