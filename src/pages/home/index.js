import React, { useEffect, useRef, useState } from "react";
import Slider from "./components/Slider";
import About from "./components/About";
import Header from "./components/header";
import Services from "./components/services";
import Footer from "./components/fotter";
function Home() {
  function useOnScreen(ref) {
    const [isIntersecting, setIntersecting] = useState(false);

    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    useEffect(() => {
      observer.observe(ref.current);
      return () => {
        observer.disconnect();
      };
    }, []);

    return isIntersecting;
  }
  const ref = useRef();
  const isVisible = useOnScreen(ref);
  return (
    <div>
      <div ref={ref}>
        <Slider />
      </div>
      {!isVisible && (
        <div style={{ position: "sticky", top: "0", zIndex: "23" }}>
          <Header />
        </div>
      )}
      <About />
      <Services />
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
