import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

import Home from "./Home.js";
import SearchNews from "./SearchNews/SearchNews.js";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/:id" element={<SearchNews />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
