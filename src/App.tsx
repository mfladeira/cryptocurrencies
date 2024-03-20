import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import "./App.module.scss";
import store from "./redux/store";
import { Provider } from "react-redux";
import Header from "./components/Header/Header";

function App() {
	return (
		<Provider store={store}>
			<Header />
			<RouterProvider router={router} />
		</Provider>
	);
}

export default App;
