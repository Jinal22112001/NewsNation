import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../NavBar/Navbar";
import NewsCard from "../TopNews/NewsCard";
import axios from "axios";
import ScrollTop from "../scrollTotop.svg";
import "./SearchNews.css";

const SearchNews = () => {
	const param = useParams();
	const navigate = useNavigate();
	const [searchQuery, setSearchQuery] = useState(param.id);
	const [page, setPage] = useState(1);
	const [visibleNews, setVisibleNews] = useState(20);
	const [loading, setLoading] = useState(false);

	const [data, setData] = useState([]);
	const [totalRes, setTotalRes] = useState(25);

	const showMoreNewsItems = () => {
		if (data && data.length > visibleNews) {
			setVisibleNews(visibleNews + 15);
		} else if (totalRes > data?.length) {
			loadNews(page);
			setPage(page + 1);
			setVisibleNews(visibleNews + 15);
		}
	};

	const loadNews = (pageNo) => {
		const config = {
			method: "get",
			url: `https://newsapi.org/v2/everything?q=${searchQuery}&sortBy=publishedAt&page=${pageNo}&apiKey=${process.env.REACT_APP_NEWSNATION_API_KEY}`,
		};
		setLoading(true);
		axios(config)
			.then(function (response) {
				if (response.data.status === "ok") {
					setTotalRes(response.data.totalResults);
					setData((d) => {
						return [...d, ...response.data.articles];
					});
					setLoading(false);
				}
			})
			.catch(function (error) {
				console.log(error);
				setLoading(false);
			});
	};

	const loadNewsWithQuery = () => {
		if (searchQuery.length <= 0 || searchQuery.length >= 500) return;
		setPage(1);
		navigate(`/${searchQuery.replace(" ", "+")}`);
		// navigate(`/${searchQuery}`);
	};
	useEffect(() => {
		setData([]);
		loadNews(page);
		setPage(page + 1);
	}, [param.id]);

	return (
		<div>
			<Navbar id="top"></Navbar>
			<div className="SearchSomethingDiv"></div>
			<div className="searchDiv">
				<input
					type="text"
					value={searchQuery.replace("+", " ")}
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
					{data.slice(0, visibleNews).map((newsData, k) => (
						<NewsCard
							key={newsData.title + k}
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
			<a href="#top" className="ScrollToTop">
				<img
					className="ScrollToTop"
					href="#top"
					src={ScrollTop}
					alt=""
				/>
			</a>
		</div>
	);
};

export default SearchNews;
