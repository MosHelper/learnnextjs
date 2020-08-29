import styles from "../styles/todo.module.css";
import { Tooltip, Button, Popconfirm } from "antd";
import { DeleteOutlined, CheckOutlined } from "@ant-design/icons";

const Todo = ({ todo, update }) => {

    const todoComplete = async () => {
        try {
            const res = await fetch(`/api/todos/${todo._id}/complete`, {
                method: 'PUT',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            })
            update();
        } catch (error) {
            console.log(error);
        }
    }

    const onDelete = async () => {
        try {
            await fetch(`/api/todos/${todo._id}`, {
                method: 'DELETE',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            })
            update();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className={styles.todo}>
            {
                todo.isCompleted
                    ? <>
                        <Button disabled shape="circle" icon={<CheckOutlined />} />
                        <span className={styles.completed}>{todo.task}</span>
                    </>
                    : <>
                        <Button shape="circle" onClick={todoComplete} icon={<CheckOutlined />} />
                        <span>{todo.task}</span>
                    </>
            }
            <Popconfirm title="Are you sure delete this task?" onConfirm={onDelete}>
                <Button shape="circle" type="text" icon={<DeleteOutlined />} />
            </Popconfirm>
        </div>
    )
}

export default Todo