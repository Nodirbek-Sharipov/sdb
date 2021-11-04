import * as React from "react"

function HomeIcon(props) {
    return (
        <svg
            width={16}
            height={15}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M2.5 6.124V13.5a.5.5 0 00.5.5h3V9.75A.75.75 0 016.75 9h2.5a.75.75 0 01.75.75V14h3a.5.5 0 00.5-.5V6.124"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M12.5 5.093V1.5H11v2.157m4 3.843L8.34 1.124c-.156-.165-.521-.166-.68 0L1 7.5h14z"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default HomeIcon
