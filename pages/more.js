import Link from "next/link";
import BaseMeta from "../components/BaseMeta";
import ContactIcons from "../components/ContactIcons";
import NavBar from "../components/NavBar";
import Section from "../components/Section";

export default function More() {
	const tagline = 'Web Developer | "Yak"';

	return (
		<div style={{ backgroundImage: "url('/img/isaacyakl-hero-background-4k.jpg')", backgroundSize: "cover", backgroundAttachment: "fixed", minHeight: "100vh" }}>
			<BaseMeta title="Browse Yak's businesses, projects, and more." desc="Browse a list of links to Yak's businesses, projects, and more." />
			<NavBar active="more" />
			<main className="max-page-width" role="main" style={{ textAlign: "center" }}>
				<Section>
					<h1>Isaac Litzenberger</h1>
					<p>{tagline}</p>
				</Section>
				<Section style={{ margin: "auto", maxWidth: "20rem", display: "grid", gridTemplateColumns: "1fr" }}>
					<Link href="/">
						<button className="btn cta more-links">Yak's Portfolio</button>
					</Link>
					<Link href="https://iamaliveinchrist.com">
						<button className="btn cta more-links">Alive in Christ Apparel</button>
					</Link>
					<Link href="https://open.spotify.com/user/izacktheyak/playlists">
						<button className="btn cta more-links">Spotify Playlists</button>
					</Link>
					<Link href="http://nsfpgaming.com">
						<button className="btn cta more-links">NSFP Gaming</button>
					</Link>
				</Section>
				<Section>
					<ContactIcons />
				</Section>
				<Section style={{ fontSize: "small" }}>
					<p>&copy; {new Date().getFullYear()} Isaac Litzenberger &mdash; All rights reserved.</p>
				</Section>
			</main>
		</div>
	);
}