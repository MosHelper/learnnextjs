import Head from "next/head";
import Link from "next/link";
import { PageHeader } from "antd";
import TodoList from "../components/TodoList";
import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/client'

const Home = () => {
  const [session, loading] = useSession()

  return (
    <div>
      <Head>
        <title>TodoApp: with next.js</title>
      </Head>
      {!session && <>
        Not signed in <br />
        <button onClick={signIn}>Sign in</button>
      </>}
      {session && <>
        Signed in as {session.user.email} <br />
        <button onClick={signOut}>Sign out</button>
      </>}
      <PageHeader title="Todo App" subTitle="with next.js" />
      <TodoList />
      <Link href="/admin/home">
        <a>Admin</a>
      </Link>
    </div>
  )
}

export default Home;