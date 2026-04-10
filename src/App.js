import GlobalStyles  from "./styles/GlobalStyles";
import Navbar        from "./components/Navbar";
import Hero          from "./components/Hero";
import About         from "./components/About";
import Programs      from "./components/Programs";
import Productions   from "./components/Productions";
import Events        from "./components/Events";
import Testimonials  from "./components/Testimonials";
import Membership    from "./components/Membership";
import CTABanner     from "./components/Ctabanner";
import Footer        from "./components/Footer";

export default function App() {
  return (
    <div
      style={{
        fontFamily: "'Cormorant Garamond', Georgia, serif",
        background: "#FFFFFF",
        color: "#111827",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <GlobalStyles />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Programs />
        <Productions />
        <Events />
        <Testimonials />
        <Membership />
        <CTABanner />
      </main>

      <Footer />
    </div>
  );
}
