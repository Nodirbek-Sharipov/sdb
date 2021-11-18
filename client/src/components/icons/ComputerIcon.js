import * as React from "react"

function ComputerIcon(props) {
    return (
        <svg
            width={24}
            height={24}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g clipPath="url(#prefix__clip0_12:32)">
                <path
                    d="M0 18.168h2.824V4.42h18.353v13.748H24v1.411H0v-1.412zm4.235-3.18h15.53V5.832H4.235v9.158zm15.53 1.412H4.235v1.768h15.53V16.4z"
                    fill="#000"
                />
            </g>
            <defs>
                <clipPath id="prefix__clip0_12:32">
                    <path fill="#fff" d="M0 0h24v24H0z" />
                </clipPath>
            </defs>
        </svg>
    )
}

export default ComputerIcon
