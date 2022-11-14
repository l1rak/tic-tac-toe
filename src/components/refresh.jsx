import React from 'react'

const style = {
	width: "250px",
	margin: "auto",
    marginTop: "40px",
	display: "grid",
	fontSize: "40px",
	fontWeight: "800",
    border: "3px solid black"
};

const Refresh = (props) => <button name={"btn"} style={style} onClick={props.onClick}>{props.value}</button>

export default Refresh