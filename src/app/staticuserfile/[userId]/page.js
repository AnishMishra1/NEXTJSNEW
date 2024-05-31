import getUsers from "../../../../services/getUser"

export default async function Page({ params }) {
    const data = await getUsers();
    console.log(params);
    return (
      <div>
        page for user {params.userId}
      </div>
    );
  }
  
  export async function generateStaticParams() {
    const data = await getUsers();
    return data.map((user) => ({
      userId: user.id.toString()
    }));
  }