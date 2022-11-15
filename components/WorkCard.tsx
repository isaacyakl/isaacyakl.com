import Image from "next/image";
import Link from "next/link";
import { title } from "../data/meta";

const WorkCard = ({ id, title, date, role, image, summary }: { id: string; title: string; date: string; role: string; image: string; summary: string }) => {
	const roleHeading = () => {
		return <h3>{role}</h3>;
	};
	const dateHeading = () => {
		return <h3>{date}</h3>;
	};
	return (
		<div className="work-card">
			<Link href={`/work/${id}`} title={`View ${title}`}>
				<div className="work-card-image-container">
					<Image className="work-card-image" src={`/img/work/${image}`} alt={`${title} screenshot`} fill />
				</div>
				<div className="work-card-border"></div>
				<div className="work-card-summary">
					<h2>{title}</h2>
					{role ? roleHeading() : ``}
					{date ? dateHeading() : ``}
					<p className="summary-body" dangerouslySetInnerHTML={{ __html: summary }}></p>
				</div>
			</Link>
		</div>
	);
};

WorkCard.defaultProps = {
	id: title,
	title: "",
	date: "",
	role: "",
	image: "",
	summary: "",
};

export default WorkCard;
