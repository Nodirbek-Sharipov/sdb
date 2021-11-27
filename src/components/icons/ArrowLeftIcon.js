import * as React from "react"

function ArrowLeftIcon(props) {
    return (
        <svg
            width={24}
            height={24}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M15 4l-8 8 8 8"
                stroke="#9F9F9F"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default ArrowLeftIcon
