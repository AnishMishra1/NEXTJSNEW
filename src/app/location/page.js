
"use client"
import Script from "next/script"
import getLocation from "../../../public/location"

export default function Location(){

    return (
        <div>
            <Script
            src ="/location.js"
            onLoad = {
                () => console.log("file loaded")
            }
            />
            <h1>
                welcome to location
            </h1>

        </div>
    )
}