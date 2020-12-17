import "@styles/globals.css";
import { useSpring, animated } from "react-spring";
import { GlobalStyles } from "../components/GlobalStyles";
import Footer from "components/Footer";

function Application({ Component, pageProps }) {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <>
      <animated.div style={props}>
        <Component {...pageProps} />
        <Footer />
      </animated.div>
      <GlobalStyles />
    </>
  );
}

export default Application;
