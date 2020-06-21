import React from "react"

const ImageColumns = ({data}) => {
    const makeColumns = data.map(column => {
        return (
            <aside className="column" key={column._uid}>
                <figure>
                    <img src={column.image.filename} alt={column.image.alt}/>
                    {column.image.title && <figcaption>{column.image.title}</figcaption>}
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
