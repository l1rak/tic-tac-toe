import React from 'react'

const style = {
	fontSize: "40px",
    fontWeight: "bold",
    borderColor: "black"
}   


/*
Box.jsx is the discrete unit structure of the Board.
It is made a button.
When its pressed it will call the function passed from porps.
It will display value that is passed from Board
*/
export const Box = (props) =>
 <button  name={props.name}  style={style}  onClick={props.onClick}> {props.value}  </button>

export default Box