import * as React from "react"

function SearchIcon(props) {
    return (
        <svg
            width={30}
            height={30}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M12.954 3.75a9.204 9.204 0 100 18.409 9.204 9.204 0 000-18.409v0z"
                stroke="#050448"
                strokeWidth={2}
                strokeMiterlimit={10}
            />
            <path
                d="M19.822 19.822l4.884 4.002"
                stroke="#050448"
                strokeWidth={2}
                strokeMiterlimit={10}
                strokeLinecap="round"
            />
        </svg>
    )
}

export default SearchIcon
