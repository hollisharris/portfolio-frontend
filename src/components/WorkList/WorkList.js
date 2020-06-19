import React from "react"
import LinkPrimary from '../LinkPrimary'

import '../../styles/work-list.css'

const WorkList = ({data}) => {

  const workList = data.map(work => {

    const   _uid     = work._uid,
            teaser   = work.teaser,
            headline = work.headline,
            category = work.category,
            fullSlug = work.fullSlug;

    return (
      <div className="work-item" key={_uid}>
        <h3>{teaser} | {category}</h3>
        <p>{headline}</p>
        <LinkPrimary data={{
          text: "View Case Study",
          path: fullSlug,
          aria: `View the ${teaser} Case Study`,
          showIcon: false
        }}/>
      </div>
    )
  })

  return (
    <div className="work-list">
      {workList}
    </div>
  )
}

export default WorkList
