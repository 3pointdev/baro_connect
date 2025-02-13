import Footer from "components/combinations/footer/footer";
import Header from "components/combinations/header/header";
import pageUrlConfig from "config/pageUrl.config";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { wrapper } from "src/redux/store";
import "styles/globals.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function App({ Component, pageProps }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(pageProps);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const router = useRouter();
  const headerlessUrl = [
    pageUrlConfig.login,
    pageUrlConfig.join,
    pageUrlConfig.contact,
    pageUrlConfig.find,
  ];

  useEffect(() => {
    //다크모드 배경 설정
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        const html = document.querySelector("html");
        const body = document.querySelector("body");

        if (event.matches) {
          html.classList.add("dark");
          body.classList.add("dark");
        } else {
          html.classList.remove("dark");
          body.classList.remove("dark");
        }
      });

    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      const html = document.querySelector("html");
      const body = document.querySelector("body");

      html.classList.add("dark");
      body.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    const setAgent = () => {
      setIsMobile(navigator.userAgent.includes("Mobi"));
    };

    setAgent();

    window.addEventListener("resize", setAgent);
    return () => window.removeEventListener("resize", setAgent);
  }, []);

  return (
    <Provider store={store}>
      {isMobile ? (
        <>
          {!headerlessUrl.includes(router.pathname) && <Header />}
          <Component {...props.pageProps} router={router} isMobile={isMobile} />
          {!headerlessUrl.includes(router.pathname) && (
            <Footer router={router} />
          )}
        </>
      ) : (
        <div className="relative w-screen h-screen">
          <img
            src="https://barofactory.kr/wp-content/uploads/2023/10/Untitled-1.png"
            alt="mobile_cover_background"
            className="absolute opacity-60"
          />
          <img
            src="/images/agent/mobile_cover.png"
            alt="mobile_cover"
            className="w-[430px] h-[800px] z-50 absolute right-[30%] top-[49%] -translate-y-1/2 pointer-events-none"
          />
          <div className="w-[382px] h-[728px] absolute right-[calc(30%+24px)] top-[calc(50%+4px)] -translate-y-1/2 pointer-events-auto overflow-hidden">
            {!headerlessUrl.includes(router.pathname) && <Header />}
            <Component {...props.pageProps} router={router} />
            {!headerlessUrl.includes(router.pathname) && (
              <Footer router={router} />
            )}
          </div>
        </div>
      )}
    </Provider>
  );
}
