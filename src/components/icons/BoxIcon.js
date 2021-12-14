import * as React from "react"

function BoxIcon(props) {
	return (
		<svg
			width={12}
			height={13}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M11.5 9.021v-4.67a.875.875 0 00-.434-.754L6.909 1.178a1.31 1.31 0 00-1.319 0L1.434 3.597A.875.875 0 001 4.352V9.02a.875.875 0 00.434.756l4.157 2.418a1.312 1.312 0 001.319 0l4.156-2.418a.875.875 0 00.434-.756z"
				stroke="#fff"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M6.25 12.374V6.905M1.137 3.897L6.25 6.905l5.113-3.008H1.137z"
				stroke="#fff"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}

export default BoxIcon
