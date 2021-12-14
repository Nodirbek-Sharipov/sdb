import * as React from "react"

function StarIcon(props) {
	return (
		<svg
			width={16}
			height={15}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M15 6H9.625L8 1 6.375 6H1l4.375 3-1.688 5L8 10.875 12.313 14l-1.688-5L15 6z"
				stroke="#050448"
				strokeWidth={1.3}
				strokeLinejoin="round"
			/>
		</svg>
	)
}

export default StarIcon
