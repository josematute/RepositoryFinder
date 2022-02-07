function About() {
	return (
		<>
			<h1 className="text-6xl mb-4">Repository Finder</h1>
			<p className="mb-4 text-2xl font-light">
				A React app to search GitHub profiles and see profile details.
				This project is part of the
				<a href="https://www.udemy.com/course/modern-react-front-to-back/">
					{" "}
					React Front To Back
				</a>{" "}
				Udemy course by
				<strong>
					<a href="https://traversymedia.com"> Brad Traversy</a>
				</strong>
				.
			</p>
			<p className="mb-4 text-2xl font-light">
				In addition, some things have been changed and others added to
				the functionality of the project by
				<strong>
					<a href="https://github.com/josematute"> Jose Matute</a>
				</strong>{" "}
				to understand better the React technology, the basics of props,
				components and state, and the helpful use of hooks, effects,
				context, reducers and to receive information fom a public API.
			</p>
			<p className="text-lg text-gray-400">
				Layout By:
				<a
					className="text-white ml-2"
					href="https://twitter.com/hassibmoddasser">
					Hassib Moddasser
				</a>
			</p>
		</>
	)
}

export default About
