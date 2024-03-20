import { createBrowserRouter } from "react-router-dom";
import ListOfCrypto from "./pages/ListOfCrypto/ListOfCrypto";
import DetailsOfCrypto from "./pages/DetailsOfCrypto/DetailsOfCrypto";

const router = createBrowserRouter([
	{
		path: "/",
		element: <ListOfCrypto></ListOfCrypto>,
	},
	{
		path: "/details",
		element: <DetailsOfCrypto></DetailsOfCrypto>,
	},
]);

export { router };
