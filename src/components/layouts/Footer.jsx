import { FaReact } from "react-icons/fa"

function Footer() {
	return (
		<footer className="footer p-10 bg-neutral footer-center text-bg-primary">
			<div className="">
				<FaReact className="inline pr-2 text-9xl" />
				<p>Inspired by Brad Traversy's React example</p>
				<p>Edited and updated by Jose Matute - 2022</p>
			</div>
		</footer>
	)
}

export default Footer
