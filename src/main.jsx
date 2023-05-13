import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { store, persistor } from "./store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import * as Sentry from "@sentry/react";

import App from "./App.jsx";

import "./index.css";

Sentry.init({
	dsn: "https://ea45d792ee354ad8acce08dca079d9ad@o4504149477687296.ingest.sentry.io/4505177885638656",
	integrations: [new Sentry.BrowserTracing(), new Sentry.Replay()],
	tracesSampleRate: 1.0,
	replaysSessionSampleRate: 0.1,
	replaysOnErrorSampleRate: 1.0,
});

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</PersistGate>
		</Provider>
	</React.StrictMode>
);
