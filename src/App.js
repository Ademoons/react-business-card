import React from "react"
import Info from "./Info.js"
import About from "./About.js"
import Int from "./Int.js"
import Footer from "./Footer.js"


export default function App() {
    return (
        <div className="container">
            <Info/>
            <About/>
            <Int/>
            <Footer/>
        </div>
    )
}