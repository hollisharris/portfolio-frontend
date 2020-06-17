import React from "react"
import LinkPrimary from '../LinkPrimary'

import '../../styles/work-list.css'

const WorkList = ({data}) => {
  // const   teaser        = data.teaser,
  //         headline      = data.headline,
  //         description   = data.description,
  //         linkText      = data.linkText,
  //         linkUrl       = data.linkUrl;
  console.log(data)

  const workList = data.map(work => {
    const content = work.relation.story.content

    return (
      <div className="work-item" key={work._uid}>
        <h3>{content.hero_teaser} | {content.category}</h3>
        <p>{content.hero_headline}</p>
        <LinkPrimary data={{
          text: "View Case Study",
          path: work.relation.story.full_slug,
          aria: `View the ${content.hero_teaser} Case Study`,
          showIcon: true,
          icon: content.home_link_icon
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
