import axios from "axios";
import App from "next/app";
import { Router } from "next/router";
import { parseCookies } from "nookies";
import { AuthProvider } from "../src/contexts/AuthProvider";
import "../styles/globals.css";
import NProgress from "nprogress";
import "../public/css/nprogress.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <AuthProvider value={this.props.initialAuth}>
        <Component {...pageProps} />;
      </AuthProvider>
    );
  }
}

export default MyApp;

MyApp.getInitialProps = async ({ ctx }) => {
  const { jwt } = parseCookies(ctx);
  if (jwt) {
    try {
      const { data } = await axios.get(
        process.env.NEXT_PUBLIC_API_URL + "API",
        { headers: { Authorization: "Bearer " + jwt } }
      );
      return { initialAuth: data };
    } catch (e) {
      return { redirect: { destination: "/", permanent: false } };
    }
  }
  return { redirect: { destination: "/", permanent: false } };
};
