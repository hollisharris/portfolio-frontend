import React from "react"

const ImageColumns = ({data}) => {
    const makeColumns = data.map(column => {
        return (
            <aside className="column">
                <figure>
                    <img src={column.image} alt={column.alt}/>
                    {column.caption && <figcaption>{column.caption}</figcaption>}
                </figure>
            </aside>
        )
    })
    return (
        <div className="image-columns">
            {makeColumns}
        </div>
    )
}

export default ImageColumns
