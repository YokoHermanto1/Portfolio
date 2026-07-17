import Background from "../pages/Background";
import Hero from "../pages/Hero";
import Navbar from "../components/Navbar";
import Projects from "../pages/Projects";
import Toolkit from "../pages/Toolkit";

function Home() {
  return (
    <main>
      <section id="Navbar">
        <Navbar />
      </section>

      <section id="Hero">
        <Hero />
      </section>

      <section id="Background">
        <Background />
      </section>

      <section id="Projects">
        <Projects />
      </section>

      <section id="Toolkit">
        <Toolkit />
      </section>
    </main>
  );
}

export default Home;
