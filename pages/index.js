import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Button, Empty, Skeleton, Table } from 'antd'
import Axios from 'axios';

export async function getServerSideProps() {
  try {
    const { data } = await Axios.get(`https://notesapp-lake.vercel.app/api/notes`)
    // Pass data to the page via props
    return { props: { data: data.data } }
  } catch (error) {
    // Pass data to the page via props
    return { props: { data: [] } }
  }
}

export default function Home({ data }) {
  const cols = [
    {
      title: 'Title',
      dataIndex: 'title'
    }
  ];
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>
        <div>
          {
            data.length === 0
              ? <Empty />
              : <Table dataSource={data} columns={cols} />
          }
        </div>
      </main>
    </div>
  )
}
