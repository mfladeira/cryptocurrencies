import { createBrowserRouter } from "react-router-dom";
import ListOfCrypto from "./pages/ListOfCrypto/ListOfCrypto";

const router = createBrowserRouter([
	{
		path: "/",
		element: <ListOfCrypto></ListOfCrypto>,
	},
]);

export { router };
