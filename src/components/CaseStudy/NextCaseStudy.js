import React from "react"

import LinkPrimary from '../LinkPrimary'

import '../../styles/next-case-study.css'

const NextCaseStudy = ({data}) => {
    let next = {};
    const   all     = data.all,
            current = data.current;

    function handleCheck(val) {
        return all.findIndex(item => item.position === val);
    }
    
    if(handleCheck(current + 10) >= 0) {
        // console.log(true)
        next = all[handleCheck(current + 10)]
    } else {
        // console.log(false)
        next = all[0]
    }

    return (
        <div className="next-case-study light">
            <div className="offset-left"  style={next.startColor && next.endColor && { backgroundImage: `linear-gradient(to right, ${next.startColor}, ${next.endColor}`}}>
                <div className="container">
                    <p className="teaser">Next</p>
                    <div className="next-content">
    <p className="teaser">{next.teaser}<span className="category">{next.category}</span></p>
                        <h3 className="headline">{next.headline}</h3>
                        <LinkPrimary data={{
                            text: "View Case Study",
                            path: next.slug,
                            aria: `View the ${next.teaser} Case Study`,
                            showIcon: false
                        }}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NextCaseStudy
