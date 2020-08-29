import Head from "next/head";
import { PageHeader } from "antd";
import TodoList from "../components/TodoList";

const Home = () => {
  return (
    <div>
      <Head>
        <title>TodoApp: with next.js</title>
      </Head>
      <PageHeader title="Todo App" subTitle="with next.js" />
      <TodoList />
    </div>
  )
}

export default Home;