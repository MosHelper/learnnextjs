import axios from "axios";
import Head from "next/head";

function Post({ data }) {
    return (
        <div>
            <Head>
                <title>{data.title}</title>
                <meta property="og:title" content={data.title} key="title" />
                <meta property="og:dectiption" content="autooooooo" key="decription" />
            </Head>
            <h1>{data.title}</h1>
        </div>
    )
}
// This gets called on every request
export async function getServerSideProps({ params }) {
    // Fetch data from external API
    try {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/todos/${params.id}`)
        console.log(data);
        // Pass data to the page via props
        return { props: { data } }
    } catch (error) {
        // Pass data to the page via props
        return { props: { data: false } }
    }

}

export default Post