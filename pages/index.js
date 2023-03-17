import fs from  'fs/promises';
import path from 'path';
import Link from "next/link";

function Home(props) {
    const {products} = props;
    return (
        <>
            {products.map((item) => {
                return (
                    <ul>
                        <li key={item.id}><Link href={`/${item.id}`}> {item.title} </Link></li>
                    </ul>
                )
            })}

        </>
    )
}

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
    const jsonData = await fs.readFile(filePath)
    const data = JSON.parse(jsonData)
    return {
        props: {
            products: data.products
        },
        // revalidate: 10,
        // notFound: true
    }
}

export default Home
