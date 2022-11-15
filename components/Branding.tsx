import Link from "next/link";
import Image from "next/image";
import logo from "../public/img/yak-logo.svg";
import { nick } from "../data/meta";

const Branding = () => {
	return (
		<div className="branding-container">
			<Link href="/" title="Home">
				<div className="logo-container">
					<Image className="logo" src={logo} alt="yak logo" fill />
				</div>
				<span className="site-wordmark">{nick}</span>
			</Link>
		</div>
	);
};

export default Branding;
