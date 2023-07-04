import "../styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <head>
        <meta
          name="facebook-domain-verification"
          content="7np134rsdkaz2j7dmjcwu2twcep71r"
        />
      </head>
      <Component {...pageProps} />
    </div>
  );
}
