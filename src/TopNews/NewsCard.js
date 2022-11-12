import React from "react";
import "./NewsCard.css";

const NewsCard = ({ data }) => {
	const { urlToImage, title, content, publishedAt } = data;
	const DateTime = publishedAt.split("T");
	const date = DateTime[0];
	var time = DateTime[1].split(".")[0];
	return (
		<div
			className="newsCard_div"
			onClick={() =>
				window.open(data.url, "_blank", "noopener,noreferrer")
			}
		>
			<div className="newsCard_div1">
				<img loading="lazy" src={urlToImage} alt={title} />
			</div>

			<div className="newsCard_div2">
				<h2>{title}</h2>
				<p id="dateTimeID">{`publicshed at ${time} on ${date}`}</p>
				<p id="news_contentID">{content}</p>
			</div>
		</div>
	);
};

export default NewsCard;
