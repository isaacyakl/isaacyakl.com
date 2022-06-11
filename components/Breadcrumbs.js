import PropTypes from "prop-types";
import Link from "next/link";
import React from "react";

function Breadcrumbs({ trail }) {
	return (
		<section className="page-meta max-page-width">
			<div className="breadcrumbs">
				{trail.map((link, index, ar) => {
					return (
						<React.Fragment key={link.text}>
							{ar.length - 1 !== index ? (
								<>
									<Link href={link.link}>{link.text}</Link> &gt;{" "}
								</>
							) : (
								<>{link.text}</>
							)}
						</React.Fragment>
					);
				})}
			</div>
		</section>
	);
}

Breadcrumbs.defaultProps = {
	trail: [
		{
			text: "Home",
			link: "/",
		},
	],
};
Breadcrumbs.propTypes = {
	trail: PropTypes.array,
};

export default Breadcrumbs;
