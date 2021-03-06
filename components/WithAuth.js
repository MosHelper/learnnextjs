import { useSession } from 'next-auth/client'
import AccessN from './AccessN'

const WithAuth = (Component) => {

    return props => {
        const [session, loading] = useSession()
        return loading
            ? <></>
            : session
                ? <Component {...props} session={session} />
                : <AccessN />
    }
}

export default WithAuth;