import Link from "next/link"
import getUsers from "../../../services/getUser"


export default async function Users(){
    const data = await getUsers()
    console.log("user data", data)
    return (
        <div>
            <div>
                hello generating static site generation
                {
                <div>
                {data.map((ele) => (
                  <Link href={`/staticuserfile/${ele.id}`} key={ele.id}>{ele.firstName}</Link>
                ))}
              </div>
            }
            </div>
            
        </div>
    )
}