import React from "react"

export default function Body(props) {
    console.log(props)
    return (
        <section>
            <h1>Welcome back, {props.user}!</h1>
        </section>
    )
}
