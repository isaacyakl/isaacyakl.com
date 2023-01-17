import BaseMeta from "../components/BaseMeta";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import CtaBtn from "../components/CtaBtn";
import About from "../components/About";

export default function Home() {
	return (
		<>
			<BaseMeta />
			<NavBar active="home" />
			<Hero />
			<main>
				<section>
					<About showHeading={false} />
					<div className="flex flex-wrap">
						<CtaBtn text="Browse work" href="/work" />
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}
