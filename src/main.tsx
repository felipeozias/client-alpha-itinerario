import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Home from "@pages/Home.tsx";
import NotFound from "@pages/NotFound.tsx";
import PageA from "@pages/PageA.tsx";
import PageB from "@pages/PageB.tsx";
import App from "./App.tsx";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{ path: "", element: <Home /> },
			{ path: "a", element: <PageA /> },
			{ path: "b", element: <PageB /> },
		],
	},
	{
		path: "*",
		element: <NotFound />,
	},
]);

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Elemento root não encontrado!");

createRoot(rootElement).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
