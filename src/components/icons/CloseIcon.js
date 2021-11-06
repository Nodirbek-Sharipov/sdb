import * as React from "react"

function CloseIcon(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            style={{
                height: "24px",
                width: "24px",
            }}
            {...props}
        >
            <path
                className="prefix__as-icon-fill"
                d="M3.21 19.729L19.729 3.21l1.061 1.06L4.271 20.79z"
            />
            <path
                className="prefix__as-icon-fill"
                d="M3.21 4.271l1.061-1.06L20.79 19.729l-1.06 1.06z"
            />
        </svg>
    )
}

export default CloseIcon
