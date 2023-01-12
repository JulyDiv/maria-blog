import "../../styles/style.sass";
import "swiper/css/bundle";
import { Layout } from "../components/Layout";
import { AppWrapper } from "../context/AppContext";
import { useIsLogged } from "../hooks/useIs";

function MyApp({ Component, pageProps }) {
  const isLogged = useIsLogged();
  return (
    <AppWrapper>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppWrapper>
  );
}

export default MyApp;
