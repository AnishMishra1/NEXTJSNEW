async function getProduct(){
	const response = await fetch("https://jsonplaceholder.typicode.com/users")
	const data = await response.json()
	return data
}

export default async function Serverproduct(){
     let product =  await getProduct()
     console.log(product)
      
  return (
    <div>
  <h1>Server product rendering</h1>

    {
	product.map((item) => (
		<h1>{item.name}</h1>
	))
    }
    </div>
  )
}

