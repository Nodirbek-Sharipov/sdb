import * as React from "react"

function UncheckIcon(props) {
	return (
		<svg
			width={12}
			height={12}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M11.454 5.455A.545.545 0 0010.91 6v3.818c0 .602-.49 1.091-1.09 1.091H2.181c-.602 0-1.091-.49-1.091-1.09V2.181c0-.602.49-1.091 1.09-1.091h6a.545.545 0 100-1.091h-6C.982 0 0 .982 0 2.182v7.636C0 11.018.982 12 2.182 12h7.636c1.2 0 2.182-.982 2.182-2.182V6a.545.545 0 00-.546-.545z"
				fill="#050448"
			/>
		</svg>
	)
}

export default UncheckIcon
