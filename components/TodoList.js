import useSWR, { mutate } from "swr"
import Todo from "./Todo"
import { Skeleton, Input, Form, Spin, Empty } from "antd";
import { useState } from "react";

const fetcher = url => fetch(url).then(res => res.json());

const validateMessages = {
    required: '${label} is required!',
};

const TodoList = () => {
    const [form, setForm] = useState({ task: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { data, error } = useSWR('/api/todos', fetcher);
    const refresh = () => {
        mutate('/api/todos');
    }

    if (error) return (<div>failed to load.</div>)
    if (!data) return (<div style={{ margin: '10px 20px' }}><Skeleton active /></div>)

    const onChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    };


    const onFinish = async () => {
        setIsSubmitting(true);

        try {
            await fetch(`/api/todos`, {
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            })
            refresh();
            setIsSubmitting(false);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div style={{ margin: '10px 20px' }}>
                {
                    isSubmitting
                        ? <Spin />
                        : <>
                            <Form onFinish={onFinish} validateMessages={validateMessages}>
                                <Form.Item name="task" label="Task" rules={[{ required: true }]}>
                                    <Input name="task" onChange={onChange} />
                                </Form.Item>
                            </Form>
                        </>
                }
            </div>
            {
                data.todos.length === 0
                    ? <Empty />
                    : <div>
                        {
                            data.todos.map(todo => (
                                <Todo key={todo._id} todo={todo} update={refresh} />
                            ))
                        }
                    </div>
            }

        </>
    )
}

export default TodoList