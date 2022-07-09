import Link from "next/link";
import Image from "next/image";
import logo from "../public/img/yak-logo.svg";

const Branding = () => {
	return (
		<div className="branding-container">
			<Link href="/">
				<a title="Home">
					<div className="logo">
						<Image src={logo} alt="" />
					</div>
					<span className="site-wordmark">yak</span>
				</a>
			</Link>
		</div>
	);
};

export default Branding;
