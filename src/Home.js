import React, { useState, useEffect } from "react";
import Navbar from "./NavBar/Navbar";
import TrendingNews from "./TrendingNews/TrendingNews";
import TopNews from "./TopNews/TopNews";
import "./Home.css";
import ScrollTop from "./scrollTotop.svg";
import PopUp from "./pop-up/popUp";

const Home = () => {
	const [trigger, setTrigger] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setTrigger(true);
		}, 10000);
	}, []);

	return (
		<div>
			<Navbar setTrigger={setTrigger}></Navbar>
			<div id="topDiv" className="Home_NewsContent">
				<TrendingNews
					topHeading="Technology Headlines"
					newsCall="technology"
				></TrendingNews>
				<TrendingNews
					topHeading="Sports Headlines"
					newsCall="sports"
				></TrendingNews>
			</div>
			<TopNews></TopNews>
			<PopUp trigger={trigger}>
				<div className="popUp_AboutMe">
					<h1>Thanks For Visiting!</h1>
					<div className="popUp_message">
						<p>
							Hello! I am Jinal Patel. NewsNation is my personal
							project for my portfolio.
						</p>
						<p>
							If you want to contact with me , here is some my
							social account, you can drop message there.
						</p>
					</div>
					<div className="popUp_socialBTN">
						<a
							href="mailto: jinal221101@gmail.com"
							target="_blank"
							rel="noreferrer"
						>
							Email
						</a>
						<a
							href="https://www.linkedin.com/in/jinal2211/"
							target="_blank"
							rel="noreferrer"
						>
							LinkedIn
						</a>
						<a
							href="https://www.instagram.com/jinal2001/"
							target="_blank"
							rel="noreferrer"
						>
							Instagram
						</a>
					</div>
					<div className="popUp_Close">
						<button onClick={() => setTrigger(false)}>
							Continue Reading
						</button>
					</div>
				</div>
			</PopUp>
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

export default Home;
