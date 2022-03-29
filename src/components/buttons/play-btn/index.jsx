import "./play-btn.css"
export default function PlayBtn(props){
    console.log("PlayBtn Style==========",props)
    return(
        <button type="button" className={`btn play-btn ${ props.innerTriangle ? props.innerTriangle: null}`} style={props.style}></button>
    )
}