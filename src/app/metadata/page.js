//new version
export const metadata = {
    title: "Meta Page",
    description: "Using to apply data on page",
};

export default function Metapage() {
    return (
        <div>
            <h1>Welcome to Meta Page</h1>
        </div>
    );
}

//old version
// import Head from 'next/head';

// export default function Metapage() {
//     return (
//         <div>
//             <Head>
//                 <title>Meta Page</title>
//                 <meta name="description" content="Using to apply data on page" />
//             </Head>
//             <h1>Welcome to Meta Page</h1>
//         </div>
//     );
// }

// export async function generateMetaData({ params }) {
//     return {
//         title: "Meta Page",
//         description: "Using to apply data on page"
//     };
// }

