import { useSession } from 'next-auth/client'
import AccessN from './AccessN'


// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    const [session, loading] = useSession()
    // if (!session) { return <AccessN /> }

    // Pass data to the page via props
    return { props: { data } }
  }

  
const WithAuth = (Component) => {
    // const [session, loading] = useSession()
    // When rendering client side don't display anything until loading is complete
    // if (typeof window !== 'undefined' && loading) return null
    // If no session exists, display access denied message
    // if (!session) { return <div>403</div> }
    return props => {
        const [session, loading] = useSession()
        if (typeof window !== 'undefined' && loading) return <></>

        if (!session) { return <AccessN /> }

        return <Component {...props} />
    }
}

export default WithAuth;