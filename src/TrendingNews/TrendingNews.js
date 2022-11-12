import React, { useEffect, useState } from "react";
import TrendingCard from "./TrendingCard";
import "./TrendingNews.css";
import axios from "axios";

const TrendingNews = ({ topHeading, newsCall }) => {
	// const data = [
	// 	{
	// 		source: {
	// 			id: null,
	// 			name: "Business Standard",
	// 		},
	// 		author: "IANS",
	// 		title: "YouTube rolls out TikTok rival Shorts on TV globally: Details here - Business Standard",
	// 		description:
	// 			"YouTube isnt the first service to bring shortform vertical videos to the TV screen TikTok has been experimenting with smart TV interfaces for some time",
	// 		url: "https://www.business-standard.com/article/technology/youtube-rolls-out-tiktok-rival-shorts-on-tv-globally-details-here-122110800143_1.html",
	// 		urlToImage:
	// 			"https://bsmedia.business-standard.com/_media/bs/img/article/2020-09/15/full/1600145916-6504.jpg",
	// 		publishedAt: "2022-11-08T03:37:00Z",
	// 		content:
	// 			"YouTube has started rolling out its TikTok rival short-form video app Shorts on TV to its global users.\r\nThe updated YouTube smart TV app will now let users see the popular vertical videos in an opti… [+1293 chars]",
	// 	},
	// 	{
	// 		source: {
	// 			id: null,
	// 			name: "Livemint",
	// 		},
	// 		author: "Livemint",
	// 		title: "Garena Free Fire Max redeem codes November 8, 2022: Unlock diamonds, weapons | Mint - Mint",
	// 		description:
	// 			"Garena Free Fire Max daily codes are alphanumeric codes consist of capital letters and digits. The creators keep updating these in-game codes daily.",
	// 		url: "https://www.livemint.com/technology/tech-news/garena-free-fire-max-redeem-codes-november-8-2022-unlock-diamonds-weapons-11667876881632.html",
	// 		urlToImage:
	// 			"https://images.livemint.com/img/2022/11/08/600x338/free_fire_max_1665463568806_1667876990457_1667876990457.jpg",
	// 		publishedAt: "2022-11-08T03:11:58Z",
	// 		content:
	// 			"Garena Free Fire Max is an updated version of Garena Free Fire. The online game was launched in 2021 and has become popular among mobile gamers in the country. Developed by 111 Dots Studio, the game … [+1686 chars]",
	// 	},
	// 	{
	// 		source: {
	// 			id: null,
	// 			name: "NDTV News",
	// 		},
	// 		author: "Press Trust of India",
	// 		title: "Injury Scare For Rohit Sharma During Practice, Resumes Training Ahead Of T20 World Cup Semi-Final: R.. - NDTV Sports",
	// 		description:
	// 			"According to a report, Team India on Tuesday morning suffered a massive scare as captain Rohit Sharma sustained a powerful blow on his forearm during an optional session ahead of India's T20 World Cup semi-final against England on Thursday",
	// 		url: "https://sports.ndtv.com/t20-world-cup-2022/indian-captain-rohit-sharma-sustains-forearm-injury-in-nets-ahead-of-t20-world-cup-semi-final-report-3499712",
	// 		urlToImage:
	// 			"https://c.ndtvimg.com/2022-11/c67t37d_rohit-sharma-afp_625x300_08_November_22.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675",
	// 		publishedAt: "2022-11-08T02:42:56Z",
	// 		content:
	// 			"India captain Rohit Sharma sustained a powerful blow on his forearm during an optional training session on Tuesday, leaving the team with a massive injury scare ahead of its T20 World Cup semi-final … [+1058 chars]",
	// 	},
	// 	{
	// 		source: {
	// 			id: null,
	// 			name: "Hindustan Times",
	// 		},
	// 		author: "HT Tech",
	// 		title: "Quordle 288 answer for November 8: Look no further! Check Quordle hints, clues, solutions - HT Tech",
	// 		description:
	// 			"Quordle 288 answer for November 8: Your wait to know the hints and clues for today's Quordle challenge is over. Just read below to find out the hints, clues and answers too.",
	// 		url: "https://tech.hindustantimes.com/how-to/quordle-288-answer-for-november-8-look-no-further-check-quordle-hints-clues-solutions-71667873022623.html",
	// 		urlToImage:
	// 			"https://images.hindustantimes.com/tech/img/2022/11/08/1600x900/HT_Tech_23_1667873044956_1667873045106_1667873045106.jpg",
	// 		publishedAt: "2022-11-08T02:14:01Z",
	// 		content:
	// 			"Quordle 288 answer for November 8: We have another mixed-bag of a puzzle today. The level of difficulty in Quordle puzzles have declined ever since the beginning of the previous week and it still con… [+1868 chars]",
	// 	},
	// 	{
	// 		source: {
	// 			id: null,
	// 			name: "Livemint",
	// 		},
	// 		author: "Livemint",
	// 		title: "Stock market holiday: Trading at BSE, NSE closed today. Here's why | Mint - Mint",
	// 		description:
	// 			"The Indian stock market will be closed on Tuesday on the account of Guru Nanak Jayanti",
	// 		url: "https://www.livemint.com/market/stock-market-news/stock-market-holiday-today-as-bse-nse-closed-for-guru-nanak-jayanti-11667872590536.html",
	// 		urlToImage:
	// 			"https://images.livemint.com/img/2022/11/08/600x338/stock_market_1667872711989_1667872712137_1667872712137.JPG",
	// 		publishedAt: "2022-11-08T02:10:34Z",
	// 		content:
	// 			"The Indian stock market will be closed on Tuesday on the account of Guru Nanak Jayanti, therefore, there will be no trading activity today. As per the information available on the official BSE websit… [+2107 chars]",
	// 	},
	// 	{
	// 		source: {
	// 			id: null,
	// 			name: "NDTV News",
	// 		},
	// 		author: null,
	// 		title: '"Consume Liquor, Eat Gutkha": BJP MP\'s Tips On Water Conservation - NDTV',
	// 		description:
	// 			"Bharatiya Janata Party (BJP) member of parliament (MP) from Rewa constituency Janardan Mishra has made a bizarre remark over the conservation of water in Rewa.",
	// 		url: "https://www.ndtv.com/india-news/consume-liquor-eat-gutkha-bjp-mp-janardan-mishras-tips-on-water-conservation-3499705",
	// 		urlToImage:
	// 			"https://c.ndtvimg.com/2019-11/m6csjtvc_janardan-mishra_625x300_05_November_19.jpg",
	// 		publishedAt: "2022-11-08T01:39:44Z",
	// 		content:
	// 			"The BJP MP was recently spotted cleaning a toilet with his bare hands.\r\nRewa (Madhya Pradesh): Bharatiya Janata Party (BJP) member of parliament (MP) from Rewa constituency Janardan Mishra has made a… [+1431 chars]",
	// 	},
	// 	{
	// 		source: {
	// 			id: null,
	// 			name: "YouTube",
	// 		},
	// 		author: null,
	// 		title: "Last total lunar eclipse, 'blood moon' of 2022 is Tuesday - WCNC",
	// 		description:
	// 			"Look up in the early hours of Tuesday morning — you may get to see the last total lunar eclipse for a few years. Lunar eclipses, also known as 'blood moons,'...",
	// 		url: "https://www.youtube.com/watch?v=giry5iqkqbc",
	// 		urlToImage: "https://i.ytimg.com/vi/giry5iqkqbc/hqdefault.jpg",
	// 		publishedAt: "2022-11-08T01:07:00Z",
	// 		content: null,
	// 	},
	// 	{
	// 		source: {
	// 			id: null,
	// 			name: "India Today",
	// 		},
	// 		author: "Arunesh Kumar Sharma",
	// 		title: "Horoscope Today, 8 November 2022: Check here Astrological prediction for all sun signs - India Today",
	// 		description:
	// 			"Today Horoscope: Astrological prediction for 8 November, 2022: Aren't you excited to know what stars have in store for you today? Find out the answers to your questions related to love, health, money, career in this daily horoscope for Aries, Taurus, Gemini, …",
	// 		url: "https://www.indiatoday.in/horoscopes/story/horoscope-today-november-8-2022-aries-taurus-gemini-cancer-leo-virgo-libra-scorpio-sagittarius-capricorn-aquarius-pisces-2294516-2022-11-08",
	// 		urlToImage:
	// 			"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202211/daily_horoscope_16-9_1-sixteen_nine.jpg?VersionId=_Of0mrAepOx2Op5WNveTBSIY9XupAyMn",
	// 		publishedAt: "2022-11-08T00:43:06Z",
	// 		content:
	// 			"By Arunesh Kumar Sharma: Wondering what your luck has in store for you today? Look for your Sun sign in the daily horoscope below and find out. \r\nAries Daily Horoscope: Today the lunar eclipse can af… [+7516 chars]",
	// 	},
	// 	{
	// 		source: {
	// 			id: null,
	// 			name: "The Indian Express",
	// 		},
	// 		author: "Shyamlal Yadav",
	// 		title: "EWS quota: Ruling affirms BJP push for its labharthi politics that goes beyond Mandal - The Indian Express",
	// 		description:
	// 			"Picking up the threads from the November 16, 1992 OBC “creamy layer” ruling — which put an income cap on OBC quotas — the Modi government, via the 103rd amendment, sought to get around caste-based reservations by pushing welfarism among the poor who are outsi…",
	// 		url: "https://indianexpress.com/article/political-pulse/ews-quota-ruling-affirms-bjp-push-for-its-labharthi-politics-that-goes-beyond-mandal-8255283/",
	// 		urlToImage:
	// 			"https://images.indianexpress.com/2022/11/bjppresser.jpg",
	// 		publishedAt: "2022-11-07T23:57:49Z",
	// 		content:
	// 			"OVER the last eight years, the Narendra Modi-led BJP, both in government and party, has built a key plank of its politics around the labharthi, the beneficiary of a welfare scheme, who is framed, not… [+4101 chars]",
	// 	},
	// 	{
	// 		source: {
	// 			id: null,
	// 			name: "Hindustan Times",
	// 		},
	// 		author: "ANI",
	// 		title: "‘They took out three bullets from my right leg...’ Former Pak PM Imran Khan - Hindustan Times",
	// 		description:
	// 			"The Pakistan Tehreek-e-Insaaf chief made these claims while speaking from his residence in Zaman Park, Lahore, during an exclusive interview with CNN's Becky Anderson. | World News",
	// 		url: "https://www.hindustantimes.com/world-news/they-took-out-three-bullets-from-my-right-leg-former-pak-pm-imran-khan-101667862114867.html",
	// 		urlToImage:
	// 			"https://images.hindustantimes.com/img/2022/11/07/1600x900/pakistan_imran_khan_bullets_assassination_bid_news_1667862435746_1667862436018_1667862436018.jpg",
	// 		publishedAt: "2022-11-07T23:10:08Z",
	// 		content:
	// 			"Former Pakistan Prime Minister Imran Khan on Monday claimed that three bullets were taken out of his right leg after he was attacked at a political rally in Gujranwala.\r\nThe Pakistan Tehreek-e-Insaaf… [+2234 chars]",
	// 	},
	// 	{
	// 		source: {
	// 			id: "google-news",
	// 			name: "Google News",
	// 		},
	// 		author: null,
	// 		title: "Medicover Cancer Institute gets TrueBeam radiotherapy system, SGRT - The Hindu",
	// 		description: null,
	// 		url: "https://news.google.com/__i/rss/rd/articles/CBMihAFodHRwczovL3d3dy50aGVoaW5kdS5jb20vbmV3cy9jaXRpZXMvSHlkZXJhYmFkL21lZGljb3Zlci1jYW5jZXItaW5zdGl0dXRlLWdldHMtdHJ1ZWJlYW0tcmFkaW90aGVyYXB5LXN5c3RlbS1zZ3J0L2FydGljbGU2NjEwODM5OS5lY2XSAQA?oc=5",
	// 		urlToImage: null,
	// 		publishedAt: "2022-11-07T23:00:00Z",
	// 		content: null,
	// 	},
	// 	{
	// 		source: {
	// 			id: "the-times-of-india",
	// 			name: "The Times of India",
	// 		},
	// 		author: "Samir Jain",
	// 		title: "Weekly Horoscope, 6 November to 12 November 2022: Check predictions for all zodiac signs - Times of India",
	// 		description:
	// 			"Horoscope(Old) News: Read your horoscope predictions to know what the stars have in store for you this week:",
	// 		url: "https://timesofindia.indiatimes.com/astrology/horoscope/weekly-horoscope-6-november-to-12-november-2022-check-predictions-for-all-zodiac-signs/articleshow/95319206.cms",
	// 		urlToImage:
	// 			"https://static.toiimg.com/thumb/msid-95319158,width-1070,height-580,imgsize-238857,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
	// 		publishedAt: "2022-11-07T20:37:35Z",
	// 		content: "",
	// 	},
	// 	{
	// 		source: {
	// 			id: null,
	// 			name: "PINKVILLA",
	// 		},
	// 		author: "Mansi Mathur",
	// 		title: "Neetu Kapoor says THIS when asked about Alia Bhatt and Ranbir Kapoor's baby girl's name, WATCH here - PINKVILLA",
	// 		description:
	// 			"Has Seasoned Bollywood Actor Neetu Kapoor Spilled Beans About Ranbir Kapoor And Alia Bhatt’s Baby Name? Watch The Video Here To Know More And Tell Us Your Opinion In The Comments Section.",
	// 		url: "https://www.pinkvilla.com/entertainment/news/neetu-kapoor-says-this-when-asked-about-alia-bhatt-and-ranbir-kapoors-baby-girls-name-watch-here-1197974",
	// 		urlToImage:
	// 			"https://www.pinkvilla.com/english/images/2022/11/185054469_fotojet-1-1_1280*720.jpg",
	// 		publishedAt: "2022-11-07T20:30:28Z",
	// 		content:
	// 			"At the moment, both Alia and Ranbir are in the Mumbai hospital wherein Alia and her little one are taking a rest. Ranbir is also present with his wifey and mini Alia. \r\nJust like yesterday, Neetu Kap… [+1521 chars]",
	// 	},
	// 	{
	// 		source: {
	// 			id: null,
	// 			name: "Sportskeeda",
	// 		},
	// 		author: "Indranil Biswas",
	// 		title: "5 Best Diets for Weight Loss in 2022 - Sportskeeda",
	// 		description:
	// 			"A diet ideal for weight loss should provide adequate nutrients for individuals struggling with weight management while aiding in the reduction of fat percentage.",
	// 		url: "https://www.sportskeeda.com/health-and-fitness/5-best-diets-weight-loss-2022",
	// 		urlToImage:
	// 			"https://staticg.sportskeeda.com/editor/2022/11/269de-16678180038734-1920.jpg",
	// 		publishedAt: "2022-11-07T19:00:00Z",
	// 		content:
	// 			"A diet ideal for weight loss should provide adequate nutrients for individuals struggling with weight management while aiding in the reduction of fat percentage. \r\nIt should be easy for beginners to … [+4140 chars]",
	// 	},
	// 	{
	// 		source: {
	// 			id: null,
	// 			name: "Dnpindia.in",
	// 		},
	// 		author: "Nikshey Dhiman",
	// 		title: "Bigg Boss 16: Mc Stan betrays Gori Nagori, Read for details - DNP INDIA ",
	// 		description:
	// 			"Bigg Boss 16 is getting famous for the controversies and fights. as many fights are being seen in the house of",
	// 		url: "https://www.dnpindia.in/entertainment/bigg-boss-16-mc-stan-betrays-gori-nagori-read-for-details/121502/",
	// 		urlToImage:
	// 			"https://www.dnpindia.in/wp-content/uploads/2022/11/Bigg-Boss-16-7.webp",
	// 		publishedAt: "2022-11-07T18:54:41Z",
	// 		content:
	// 			"Bigg Boss 16 is getting famous for the controversies and fights. as many fights are being seen in the house of Bigg Boss. Sajid Khan shares a special and strong bond with Gori Nagori, MC Stan, Shiv T… [+1862 chars]",
	// 	},
	// 	{
	// 		source: {
	// 			id: "google-news",
	// 			name: "Google News",
	// 		},
	// 		author: null,
	// 		title: "Ex-CJ Awasthi is Law Commission chief - The Hindu",
	// 		description: null,
	// 		url: "https://news.google.com/__i/rss/rd/articles/CBMiZmh0dHBzOi8vd3d3LnRoZWhpbmR1LmNvbS9uZXdzL25hdGlvbmFsL2xvbmctYXdhaXRlZC1hcHBvaW50bWVudHMtbWFkZS1pbi1sYXctcGFuZWwvYXJ0aWNsZTY2MTA5MDAxLmVjZdIBAA?oc=5",
	// 		urlToImage: null,
	// 		publishedAt: "2022-11-07T18:36:00Z",
	// 		content: null,
	// 	},
	// 	{
	// 		source: {
	// 			id: null,
	// 			name: "NDTV News",
	// 		},
	// 		author: null,
	// 		title: "Climate Finance Scarce, Early Warning Systems Key: India at Climate Summit - NDTV",
	// 		description:
	// 			"With climate finance still scarce, climate adaptation in the form of early warning dissemination is key to safeguarding lives and livelihoods from cascading natural hazards causing substantial losses around the world, Union Environment Minister said.",
	// 		url: "https://www.ndtv.com/india-news/climate-finance-scarce-ealry-warning-systems-key-india-at-climate-summit-3498928",
	// 		urlToImage:
	// 			"https://c.ndtvimg.com/2022-11/iusnqk48_cop-27-650_625x300_07_November_22.jpg",
	// 		publishedAt: "2022-11-07T18:04:00Z",
	// 		content:
	// 			"New Delhi: With climate finance still scarce, climate adaptation in the form of early warning dissemination is key to safeguarding lives and livelihoods from cascading natural hazards causing substan… [+2652 chars]",
	// 	},
	// 	{
	// 		source: {
	// 			id: null,
	// 			name: "Football.London",
	// 		},
	// 		author: "Tom Canton",
	// 		title: "Arsenal face World Cup squad blow as Brazil surprise gives Mikel Arteta mentality challenge - Football.London",
	// 		description:
	// 			"Arsenal defender Gabriel Magalhaes was not selected by Brazil for the World Cup and football.london now looks at the positives and negatives as Mikel Arteta faces a challenge to bring out the best response.",
	// 		url: "https://www.football.london/arsenal-fc/news/arsenal-face-world-cup-squad-25456429",
	// 		urlToImage:
	// 			"https://i2-prod.football.london/incoming/article25456441.ece/ALTERNATES/s1200/1_Gabriel-Martinelli-Mikel-Arteta-Gabriel-Magalhaes-and-Arsenal.jpg",
	// 		publishedAt: "2022-11-07T18:00:00Z",
	// 		content:
	// 			"Gabriel Magalhaes will join up with Arsenal teammates Gabriel Jesus and, rather surprisingly, Gabriel Martinelli at this years World Cup in Qatar. Brazilian coach Tite opted against the 23-year-old d… [+3370 chars]",
	// 	},
	// 	{
	// 		source: {
	// 			id: null,
	// 			name: "The Tribune India",
	// 		},
	// 		author: "The Tribune India",
	// 		title: "‘We have lost the will to live’, say parents of Chhawla gangrape-murder victim after SC acquits all accused on death row - The Tribune India",
	// 		description:
	// 			"&ldquo;We have not just lost the battle but also the will to live,&rdquo; said the mother of Chhawla gangrape victim as she broke down following the Supreme Court&rsquo;s decision on Monday to acquit all the three accused.",
	// 		url: "https://www.tribuneindia.com/news/delhi/supreme-court-acquits-3-men-facing-death-in-2012-chhawla-gangrape-murder-case-448621",
	// 		urlToImage:
	// 			"https://englishtribuneimages.blob.core.windows.net/gallary-content/2022/11/2022_11$largeimg_590246949.JPG",
	// 		publishedAt: "2022-11-07T17:53:00Z",
	// 		content:
	// 			"PTI\r\nNew Delhi, November 7\r\n“We have not just lost the battle but also the will to live,” said the mother of Chhawla gangrape victim as she broke down following the Supreme Court’s decision on Monday… [+2376 chars]",
	// 	},
	// 	{
	// 		source: {
	// 			id: null,
	// 			name: "Hindustan Times",
	// 		},
	// 		author: "HT News Desk",
	// 		title: "What rules to follow while using Twitter? Elon Musk explains but also says this - Hindustan Times",
	// 		description:
	// 			"The world's richest person acquired the company recently, but has already announced updates to at least two rules.",
	// 		url: "https://www.hindustantimes.com/technology/what-rules-to-follow-while-using-twitter-elon-musk-explains-but-also-says-this-101667835752403.html",
	// 		urlToImage:
	// 			"https://images.hindustantimes.com/img/2022/11/07/1600x900/fe7ecca6-5c3c-11ed-af03-75ecaa97f008_1667794076674_1667794076674_1667835913622_1667835913622.jpg",
	// 		publishedAt: "2022-11-07T16:27:50Z",
	// 		content:
	// 			"Elon Musk on Monday posted a set of rules to be followed on Twitter, adding that the rules will, however, evolve over time.\r\nTwitter rules will evolve over time, but they're currently the following, … [+1048 chars]",
	// 	},
	// ];

	const [data, setData] = useState([]);
	const [executing, setExecuting] = useState(true);
	function randomNumber() {
		return Math.floor(Math.random() * 16) - 8;
	}
	const loadNews = () => {
		const config = {
			method: "get",
			url: `https://newsapi.org/v2/top-headlines?category=${newsCall}&page=1&apiKey=${process.env.REACT_APP_NEWSNATION_API_KEY}`,
		};

		axios(config)
			.then(function (response) {
				if (response.data.status === "ok") {
					setData(response.data.articles);
					setExecuting(false);
				}
			})
			.catch(function (error) {
				console.error(error);
				setExecuting(false);
			});
	};

	useEffect(() => {
		loadNews();
	}, []);

	return (
		<div className="TrendingNewsMainDiv">
			<h1>{topHeading}</h1>
			<div className="lds-dual-ring_main">
				{executing && <div class="lds-dual-ring"></div>}
			</div>
			<div className="TrendingNews_HeadLines">
				{data.map((newsData) => (
					<TrendingCard
						key={newsData.title}
						NewsData={newsData}
						rotate={randomNumber()}
					></TrendingCard>
				))}
			</div>
		</div>
	);
};

export default TrendingNews;
