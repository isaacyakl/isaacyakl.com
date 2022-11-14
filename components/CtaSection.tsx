import CtaBtn from "./CtaBtn";

export default function CtaSection({ ctaBody, btnText, btnHref }: { ctaBody?: string; btnText: string; btnHref: string }) {
	const getBody = () => {
		if (ctaBody !== undefined) return ctaBody;
		return (
			<>
				<strong>Discover new solutions and strategies.</strong>
				<br />
				Take your business to the next level.
			</>
		);
	};

	return (
		<>
			<section className="cta-section max-page-width no-select dont-print">
				<hr />
				<p className="text-center">{getBody()}</p>
				<CtaBtn text={btnText} href={btnHref} />
			</section>
		</>
	);
}