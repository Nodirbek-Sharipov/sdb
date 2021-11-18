import * as React from "react"

function SortIcon(props) {
    return (
        <svg
            width={14}
            height={14}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M.968 2.382L5.58 7.754a.44.44 0 01.108.285v3.263a.217.217 0 00.147.207l2.192.73a.216.216 0 00.262-.108.217.217 0 00.024-.1V8.04a.44.44 0 01.109-.285l4.61-5.372a.383.383 0 00-.29-.632H1.26a.383.383 0 00-.291.632z"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default SortIcon
