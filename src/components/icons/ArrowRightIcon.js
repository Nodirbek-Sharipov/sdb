import * as React from "react"

function ArrowRightIcon(props) {
	return (
		<svg
			width={10}
			height={18}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M1 17l8-8-8-8"
				stroke="#000"
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}

export default ArrowRightIcon
