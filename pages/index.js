import BaseMeta from "../components/BaseMeta";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import CtaBtn from "../components/CtaBtn";
import { intro } from "../data/meta";

export default function Home() {
	return (
		<>
			<BaseMeta title='Isaac "Yak" Litzenberger&apos;s Portfolio' desc="Have a look at yak's portfolio of work details and included resume." />
			<NavBar active="home" />
			<Hero />
			<main className="max-page-width">
				<section>
					<h2>About</h2>
					<div className="intro">
						<p>{intro}</p>
						<p>I am seeking work that offers experience with modern web architecture (Web3) and attempts to solve meaningful problems.</p>
					</div>
				</section>
			</main>
			<Footer>
				<CtaBtn ctaText="Browse work" ctaHref="/work" />
			</Footer>
		</>
	);
}
