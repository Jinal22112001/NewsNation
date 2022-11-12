import React from "react";
import "./TrendingCard.css";

const TrendingCard = ({ NewsData, rotate }) => {
	const { urlToImage, title } = NewsData;
	const style = {
		transform: `rotate(${rotate}deg)`,
	};
	return (
		<div className="card_TrendingCard" style={style}>
			<img loading="lazy" src={urlToImage} alt={title} />
			<div className="blurred-box">
				<p>{title}</p>
			</div>
		</div>
	);
};

export default TrendingCard;
