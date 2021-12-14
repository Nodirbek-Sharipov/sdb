import * as React from "react"

function MailIcon(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 512 512"
			width={16}
			height={16}
			{...props}
		>
			<title>{"Mail"}</title>
			<rect
				x={48}
				y={96}
				width={416}
				height={320}
				rx={40}
				ry={40}
				fill="none"
				stroke="#fff"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={32}
			/>
			<path
				fill="none"
				stroke="#fff"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={32}
				d="m112 160 144 112 144-112"
			/>
		</svg>
	)
}

export default MailIcon
