import BaseMeta from "../../components/BaseMeta";
import WorkBrowser from "../../components/WorkBrowser";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import Section from "../../components/Section";
import Footer from "../../components/Footer";
import { getAllWorkMetadata } from "../../lib/work";
import { useRouter } from "next/router";
import ContactBtn from "../../components/ContactBtn";

const Index = ({ allWorkMetadata }) => {
	const router = useRouter();

	const updateURLQuery = (q) => {
		if (q !== "") {
			router.query.q = q;
			router.push(router);
		} else {
			router.push("");
		}
	};

	return (
		<>
			<BaseMeta title="Experience" desc="Isaac's work." />
			<NavBar active="work" />
			<Header heading="Work" />
			<main role="main">
				<Section>
					<WorkBrowser workMetadata={allWorkMetadata} tagQuery={router.query.q} onQueryUpdate={updateURLQuery} />
				</Section>
			</main>
			<Footer>
				<ContactBtn />
			</Footer>
		</>
	);
};

export async function getStaticProps() {
	const allWorkMetadata = await getAllWorkMetadata();

	if (allWorkMetadata) {
		return {
			props: {
				allWorkMetadata,
			},
		};
	}
	return;
}

export default Index;
