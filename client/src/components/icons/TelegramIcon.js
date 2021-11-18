import * as React from "react"

function TelegramIcon(props) {
    return (
        <svg
            width={30}
            height={35}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M29.912 7.29l-4.527 21.348c-.341 1.507-1.232 1.882-2.498 1.172l-6.897-5.082-3.328 3.2c-.368.369-.677.677-1.386.677l.495-7.025 12.784-11.55c.555-.496-.12-.771-.864-.275l-15.804 9.95-6.803-2.13c-1.48-.461-1.507-1.479.308-2.189L28.003 5.134c1.232-.462 2.31.275 1.909 2.156z"
                fill="#000"
            />
        </svg>
    )
}

export default TelegramIcon
