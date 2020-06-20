import React from "react"
import { Link } from 'gatsby'

import '../../styles/work-list.css'

const WorkList = ({data}) => {

  const sizes = [
    "landscape-4",
    "portrait-4",
    "portrait-3",
    "landscape-6"
  ]

  const workList = data.map((work,index) => {

    const   _uid        = work._uid,
            teaser      = work.teaser,
            headline    = work.headline,
            category    = work.category,
            fullSlug    = work.fullSlug,
            foreground  = work.foreground,
            background  = work.background;

    let counter;
    if(sizes[index]) {
      counter = index
    } else {
      counter = 0
    }

    return (
      <div className={`work-item ${sizes[counter]}`} key={_uid}>
        <Link to={fullSlug}>
          <div className="thumbnail"><img src={background} /></div>
          <div className="content">
            <h3>{teaser}<span className="category">{category}</span></h3>
            <p>{headline}</p>
          </div>
        </Link>
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
