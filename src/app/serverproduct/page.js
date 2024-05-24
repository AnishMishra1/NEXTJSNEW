import Productid from "./productid/page";

//server side render .it use for seo marketing
async function getProduct() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return data;
}

export default async function Serverproduct() {
  let product = await getProduct();
  

  return (
    <div>
      <h1>Server product rendering</h1>

      {product.map((item) => (
        <div key={item.id}>
          <h1>{item.name}</h1>
          <Productid id={item.id} />
        </div>
      ))}
    </div>
  );
}
