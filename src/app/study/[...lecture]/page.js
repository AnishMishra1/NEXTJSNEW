import React from 'react'

export default function Lecture({params}){
	console.log(params)
  return (
    <div>wlecome to lecture {params.lecture[0] }and day {params.lecture[1]}</div>
  )
}

