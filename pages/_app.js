import "@styles/globals.css";
import { useSpring, animated } from "react-spring";
import { GlobalStyles } from "../components/GlobalStyles";
import Footer from "components/Footer";
import Navbar from "components/Navbar";

function Application({ Component, pageProps }) {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <>
      <animated.div style={props}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </animated.div>
      <GlobalStyles />
    </>
  );
}

export default Application;
