import BaseMeta from "../../components/BaseMeta";
import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import { getAllWorkIds, getWorkFileData } from "../../lib/work";
import Link from "next/link";
import WorkTags from "../../components/WorkTags";
import ContactBtn from "../../components/ContactBtn";
import Breadcrumbs from "../../components/Breadcrumbs";

const Work = ({ title, date, images, tags, results, role, summary, links, htmlContent }) => {
	const getResults = () => {
		if (results && results.length > 0) {
			return (
				<ul>
					{results.map((r, i) => {
						return <li key={`result${i}`}>{r}</li>;
					})}
				</ul>
			);
		} else return "";
	};

	return (
		<>
			<BaseMeta title={`The ${title} development process`} desc={`Read about the development process of ${title} and how yak was involved.`} />
			<NavBar active="work" />
			<Breadcrumbs
				trail={[
					{ text: "Home", link: "/" },
					{ text: "Work", link: "/work" },
					{ text: title, link: "" },
				]}
			/>
			<Header heading={title} />
			<main className="work">
				<section>
					<div className="drop-shadow ss">
						<Link href={`/img/work/${images[0]}`} passHref>
							<a title="Enlarge screenshot">
								<Image src={`/img/work/${images[0]}`} layout="responsive" width="100%" height="60vh" objectFit="cover" objectPosition="center top" alt={`${title} screenshot`} />
							</a>
						</Link>
					</div>
					<h2>Summary</h2>
					{getResults()}
					<p dangerouslySetInnerHTML={{ __html: summary }}></p>
					{links !== undefined ? (
						<p className="work-links text-center">
							{links.map((l) => {
								return (
									<Link href={l.url} key={l.title}>
										<a className="btn cta-link work-link" target="_blank" rel="noopener">
											{l.title}
										</a>
									</Link>
								);
							})}
						</p>
					) : (
						``
					)}
					<h3 id="tags">Skills & tools used</h3>
					{tags !== undefined ? <WorkTags tags={tags} /> : ``}
				</section>
				<div className="work-details-body">
					<section dangerouslySetInnerHTML={{ __html: htmlContent }}></section>
				</div>
			</main>
			<Footer>
				<ContactBtn />
			</Footer>
		</>
	);
};

export async function getStaticPaths() {
	const paths = getAllWorkIds();
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	if (params.id !== undefined) {
		const workFileData = await getWorkFileData(params.id);
		if (workFileData) {
			return {
				props: {
					...workFileData,
				},
			};
		}
	}
}

export default Work;
