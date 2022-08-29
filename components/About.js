import { intro } from "../data/meta";
import PropTypes from "prop-types";

function About({ showHeading }) {
	const renderHeading = () => {
		return showHeading ? <h2>About</h2> : "";
	};
	return (
		<div className="intro">
			{renderHeading()}
			<p dangerouslySetInnerHTML={{ __html: intro }}></p>
		</div>
	);
}

About.defaultProps = {
	showHeading: true,
};

About.propTypes = {
	showHeading: PropTypes.bool,
};

export default About;
