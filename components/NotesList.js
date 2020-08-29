import { Skeleton, Result } from "antd";
import useSWR from 'swr';
import Axios from "axios";

const NotesList = () => {
    const fetcher = url => Axios.get(url).then(res => res.data)

    const { data, error } = useSWR('https://jsonplaceholder.typicode.com/todos', fetcher)
    if (error) return <Result status="warning" title="Failed, Can't fetch data." />
    if (!data) return <Skeleton active />

    return (
        <ul>
            {
                data.map(note => (
                    <li key={note.id}>{note.title}</li>
                ))
            }
        </ul>
    )
}

export default NotesList;