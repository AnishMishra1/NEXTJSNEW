"use client"
import { useState } from "react"
import style from "./custom.module.css"

export default function Csspage(){
	const [color, setColor] = useState("red")
	return (
		<div>
			<h1 className={color =="red" ?style.red: style.green}>heading for css page</h1>
			<h2 style={{background:color == "red"? "red ": "green"}}>heading 2</h2>
			<button onClick={() => setColor("green")}>update color</button>
		</div>
	)
}