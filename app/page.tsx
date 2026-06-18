import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import EventsMarquee from "./components/EventsMarquee";
import Categories from "./components/Categories";
import WhyChoose from "./components/WhyChoose";
import QrBand from "./components/QrBand";
import Tools from "./components/Tools";
import WowposSection from "./components/WowposSection";
import Features from "./components/Features";
import AppSection from "./components/AppSection";
import HowItWorks from "./components/HowItWorks";
import Faq from "./components/Faq";
import ContactForm from "./components/ContactForm";
import CtaFinal from "./components/CtaFinal";
import Footer from "./components/Footer";
import { Whatsapp } from "./components/icons";
import { waLink } from "./site";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <EventsMarquee />
        <Categories />
        <WhyChoose />
        <QrBand />
        <Tools />
        <WowposSection />
        <Features />
        <AppSection />
        <HowItWorks />
        <Faq />
        <ContactForm />
        <CtaFinal />
      </main>
      <Footer />

      <a
        href={waLink()}
        target="_blank"
        rel="noopener"
        className="wa-fab"
        aria-label="Escríbenos por WhatsApp"
      >
        <Whatsapp aria-hidden />
      </a>
    </>
  );
}
