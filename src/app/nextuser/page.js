async function userList(){
    let resposne = await fetch("https://dummyjson.com/users")
    let data = await resposne.json()
    return data.users
}


export default async function Page(){

    let users = await userList()
    console.log("hey i ", users)
    
    return (
        <div>
            user list printing
            {
                users.map( elem => (
                    <h1 key={elem.id}>{elem.id}</h1>
                ))
            }
        </div>
    )
}