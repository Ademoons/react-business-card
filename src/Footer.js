import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faGithub, faGithubSquare, faInstagramSquare, faLinkedin, faTwitterSquare } from "@fortawesome/free-brands-svg-icons"

const twitter = <FontAwesomeIcon icon={faTwitterSquare} />
const facebook = <FontAwesomeIcon icon={faFacebookSquare} />
const instagram = <FontAwesomeIcon icon={faInstagramSquare} />
const linkedin = <FontAwesomeIcon icon={faLinkedin} />
const github = <FontAwesomeIcon icon={faGithubSquare } />

export default function Footer() {
    return (
        <footer className="icons">
            <span className="fab fa-twitter-square">{twitter}</span>        
            <span className="fab fa-facebook-square">{facebook}</span>
            <span className="fab fa-instagram-square">{instagram}</span>
            <span className="fab fa-linkedin">{linkedin}</span>
            <span className="fab fa-github-square">{github}</span>
        </footer>
    )
}
