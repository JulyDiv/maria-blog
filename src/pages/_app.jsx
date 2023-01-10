import "../../styles/style.sass";
import { Layout } from "../components/Layout";
import { AppWrapper } from "../context/AppContext";
import { useIsLogged } from "../hooks/useIs";
import { Preloader } from "../modules/Preloader/Preloader";

function MyApp({ Component, pageProps }) {
  const isLogged = useIsLogged();
  return (
    <AppWrapper>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      {/* <Preloader /> */}
    </AppWrapper>
  );
}

export default MyApp;
