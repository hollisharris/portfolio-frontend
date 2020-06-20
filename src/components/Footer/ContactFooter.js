import React from "react"

import LinkPrimary from '../LinkPrimary';

import "../../styles/footer.css"

const ContactFooter = ({data, dark}) => {

    const bgDark = dark || false;

    return (
        <div className={`contact-footer ${bgDark ? 'dark-bg light' : ''}`}>
            <div className="container">
                <p className="teaser">Have a project?</p>
                <h2 className="headline">Let's work together.</h2>
                <LinkPrimary data={{path: "/contact", text: "Contact Me", showIcon: false}} />
            </div>
        </div>
    )
}

export default ContactFooter
