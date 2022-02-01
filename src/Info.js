import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const envelope = <FontAwesomeIcon icon={faEnvelope} />



export default function Info() {
    return (
        <header>
            <img className="photo" src="https://s3-alpha-sig.figma.com/img/70f0/1291/0a4be9a6eaf565103fc6e2c325f3838a?Expires=1644796800&Signature=JoHdtr0q2KmGYLlMcv7cmsh7-pTLRUoi6yLu87hKAoMNpbbD1T-~j9C1BZN17IoogPzpYle04~iep3jlqeSsXhFFXjfUA8XnjLkZJAZKv4pNBV1ikMbftdgUJb3hdaNatNFJa2OO1UkLtXZO3-DcZK0lsnbG2n7eb2XS3b6FFU1wbrdbFcHcA5oWkzNtTOV-qYT759bOjb~bi~LKtp1bYuff-6yxBcG6BXK~5AS7EviVtiRGfvs0t~WpHUVjgkpxkj6oV1-CA5oAAG-ALpuKL9o2YO0eP1wQmI9NNDm4Hf0xqezQtbMVyo5Me3yWm9rVODV47LNMX0PVflKkmqgBhg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>            
            <h1 className="title">Laura Smith</h1>
            <p className="sub">Frontend Developer</p>
            <p className="info">laurasmith.website</p>
            <button><span className="fas">{envelope}</span>Email</button>
        </header>
    )
}