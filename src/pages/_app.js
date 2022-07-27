import Layout from "../../components/layout/main";
import "../../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps, router }) {
	return (
		<ChakraProvider>
			<Layout router={router}></Layout>
			<Component {...pageProps} key={router.route} />
		</ChakraProvider>
	);
}

export default MyApp;
