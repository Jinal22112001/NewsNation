import React, { useState, useEffect } from "react";
import "./TopNews.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import NewsCard from "./NewsCard";
const TopNews = () => {
	const navigate = useNavigate();
	const [data, setData] = useState([]);
	const [totalRes, setTotalRes] = useState(10);
	const [visibleNews, setVisibleNews] = useState(10);
	const [page, setPage] = useState(1);
	const [searchQuery, setSearchQuery] = useState("");
	const [loading, setLoading] = useState(false);

	const loadNews = (pageNo) => {
		setLoading(true);
		const config = {
			method: "get",
			url: `https://newsapi.org/v2/top-headlines?country=in&page=${pageNo}&apiKey=${process.env.REACT_APP_NEWSNATION_API_KEY}`,
		};

		axios(config)
			.then(function (response) {
				if (response.data.status === "ok") {
					setTotalRes(response.data.totalResults);
					setData([...data, ...response.data.articles]);
					setLoading(false);
				}
			})
			.catch(function (error) {
				console.log(error);
				setLoading(false);
			});
	};

	const loadNewsWithQuery = () => {
		if (searchQuery.length <= 0) return;
		navigate(`/${searchQuery}`);
		// const config = {
		// 	method: "get",
		// 	url: `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=ad40129c3619412aac5e39e1dff75971`,
		// };

		// axios(config)
		// 	.then(function (response) {
		// 		if (response.data.status === "ok") {
		// 			setTotalRes(response.data.totalResults);
		// 			setData([...data, ...response.data.articles]);
		// 		}
		// 	})
		// 	.catch(function (error) {
		// 		console.log(error);
		// 	});
	};

	const showMoreNewsItems = () => {
		if (data && data.length > visibleNews) {
			setVisibleNews(visibleNews + 10);
		} else if (totalRes > data?.length) {
			loadNews(page);
			setPage(page + 1);
			setVisibleNews(visibleNews + 10);
		}
	};

	useEffect(() => {
		loadNews(page);
		setPage(page + 1);
	}, []);
	return (
		<div>
			<h1 id="TopNewsHeading">Top News</h1>
			<div className="searchDiv">
				<input
					type="text"
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
				/>
				<button
					onClick={() => {
						loadNewsWithQuery();
					}}
				>
					Search
				</button>
			</div>
			{data && (
				<div className="newsContainer">
					{data.slice(0, visibleNews).map((newsData) => (
						<NewsCard
							key={newsData.title}
							data={newsData}
						></NewsCard>
					))}
				</div>
			)}
			{totalRes > visibleNews && (
				<div className="ReadMoreBTN">
					<button onClick={showMoreNewsItems} disabled={loading}>
						{loading ? "please wait" : "read more"}
					</button>
				</div>
			)}
		</div>
	);
};

export default TopNews;
