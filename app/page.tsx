import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import SelectedWork from "../components/SelectedWork/SelectedWork";
import WorkingTogether from "../components/WorkingTogether/WorkingTogether";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <SelectedWork />
      <WorkingTogether />
      <Contact />
      <Footer />
    </main>
  );
}