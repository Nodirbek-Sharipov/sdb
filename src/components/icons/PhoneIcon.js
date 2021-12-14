import * as React from "react"

function PhoneIcon(props) {
	return (
		<svg
			width={24}
			height={24}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<g clipPath="url(#prefix__clip0_12:73)" fill="#000">
				<path d="M16.5 1.5A1.5 1.5 0 0118 3v18a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 016 21V3a1.5 1.5 0 011.5-1.5h9zM7.5 0a3 3 0 00-3 3v18a3 3 0 003 3h9a3 3 0 003-3V3a3 3 0 00-3-3h-9z" />
				<path d="M12 21a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
			</g>
			<defs>
				<clipPath id="prefix__clip0_12:73">
					<path fill="#fff" d="M0 0h24v24H0z" />
				</clipPath>
			</defs>
		</svg>
	)
}

export default PhoneIcon
