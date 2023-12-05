import Header from "components/header/header";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { wrapper } from "src/redux/store";
import "styles/globals.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function App({ Component, pageProps }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(pageProps);
  return (
    <Provider store={store}>
      <Header />
      <Component {...props.pageProps} />
    </Provider>
  );
}
