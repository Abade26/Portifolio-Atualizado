import { LanguageProvider } from "@/contexts/LanguageContext";
import {
  Header,
  Hero,
  About,
  Skills,
  Experience,
  Projects,
  Contact,
  Footer,
} from "@/components/portfolio";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background dark">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
