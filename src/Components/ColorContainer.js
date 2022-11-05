const ColorContainer = (props) => {
const styling = {
    backgroundColor: props.color,
    height:"100px",
    width:"100px",
    display:"inline-block",
    margin:"15px",

}
return(
    <>
    <div style={styling}><h5 style={{padding:"12px", color:"white"}}>{props.color}</h5></div>
    
    </>
    
)
}
export default ColorContainer