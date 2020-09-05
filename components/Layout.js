import { getSession } from 'next-auth/client'
import AccessN from './AccessN'

export async function getServerSideProps(context) {
    const session = await getSession(context)
    console.log('sssssssssssssr');
    return {
        props: {
            session,
        }
    }
}

const Layout = (props) => {
    if (!props.session) { return <AccessN /> }

    return (
        <>
            <h1>Admin:</h1>
            <div>{props.children}</div>
        </>
    )
}

export default Layout