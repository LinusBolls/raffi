import style from "./index.module.css"

const clamp = function (value: number, min: number, max: number) {
    return Math.min(Math.max(value, min), max);
}


export default function Workflows() {

    const title = [

        "Move the 3D cursor with",
        "Tab",
        "to do the dingens"
    ]
    const description = `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et ma`

    const titleLength = title.join("").length

    // title max 100 characters

    const titleFontSize = titleLength

    const descFontSize = 10

    return <div className={style.container}>

        <div className={style.card}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/16x10_aspect_ratio.svg/1200px-16x10_aspect_ratio.svg.png" />


            <div className={style.box}>
                <div className={style.title} style={{ fontSize: titleFontSize }}>
                    {<span>{title[0]}</span>}

                    <span className={style.key}>{title[1]}</span>

                    {<span>{title[2]}</span>}
                </div>

                <span style={{ fontSize: descFontSize }}>{description}</span>
            </div>
        </div>
    </div>
}