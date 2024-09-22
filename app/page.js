import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import FilmsSection from "./_components/FilmsSection";
import FAQSection from "./_components/FAQSection";
import NewsLetter from "./_components/NewsLetter";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <h1 className="text-center mt-5 text-4xl font-bold">Our best movies</h1>
      <FilmsSection />
      <h1 className="text-center mt-5 text-4xl font-bold">FAQ</h1>
      <FAQSection />
      <NewsLetter />
    </div>
  );
}
