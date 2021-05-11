import "@styles/globals.css";
import { useSpring, animated } from "react-spring";
import { GlobalStyles } from "../components/GlobalStyles";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import { useEffect } from "react";
import { useRouter } from "next/router";

import * as ga from "../lib/ga";

function Application({ Component, pageProps }) {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

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
