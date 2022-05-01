import { useRouter } from "next/router";
import Header from '../../components/header';
import styles from '../../styles/Feed.module.css';


const Feed = ({pageNumber, articles}) => {

	const router  = useRouter()
	return (
		<>
			<Header />
			<div className = "container" >
				<div className={styles.main}>
					{
						articles.map((article, index) => (
							<div div key = { index } className={ styles.card }>
								{!!article.urlToImage && <img src={article.urlToImage}/>}
								<div className={styles.card_body}>
									<h2 onClick={() => (window.location.href = article.url)}>{article.title}</h2>
									<p>{article.description}</p>
								</div>
							</div>
						))
					}
				</div>
			</div>

			<div className="">
				<div className={styles.pagination}>
					<div onClick={() => {
						if(pageNumber > 1) {
							router.push(`/feed/${pageNumber - 1}`).then(() => window.scrollTo(0,0));
						}
					}}
					className={pageNumber === 1 ? styles.disabled : styles.active}>Previous
					</div>
					<div className={styles.page_number}>{pageNumber}</div>
					<div onClick={() => {
						if(pageNumber < 5) {
							router.push(`/feed/${pageNumber + 1}`).then(() => window.scrollTo(0,0));
						}
					}}
					className={pageNumber < 5 ? styles.active : styles.disabled}>Next
					</div>
				</div>
			</div>
		</>
	)
}

export const getServerSideProps = async pageContext => {
	const pageNumber = pageContext.query.slug;

	if(!pageNumber || pageNumber < 1 || pageNumber > 8) {
		return {
			props: {
				articles: [],
				pageNumber: 1,
			}
		}
	}

	const resp = await fetch(`https://newsapi.org/v2/top-headlines?country=us&pageSize=5&page=${pageNumber}`,
		{
			headers: {
				Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
			},
		},
	);
	const apiJson = await resp.json();
	const {articles} = apiJson;
	return {
		props: {
			articles,
			pageNumber: Number.parseInt(pageNumber)
		}
	}
};

export default Feed;
