import Link from 'next/link'
import React from 'react'

const arr = [
	{ name :"anish" , id:1},
	{name:"Sam ", id:2},
	{name : "hary", id:23}
	
]

export default function StudentList(){
  return (
    <div>
    welcome to student list
    <h1>Student List</h1>
            <ul>
                {arr.map((elem)=> (<li> 
                    <Link href={`/studentlist/${elem.name}`}>{elem.name}</Link>
                </li>))}
                
            </ul>
    </div>
  )
}
