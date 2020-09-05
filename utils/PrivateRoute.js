import React from 'react'
import { getSession } from 'next-auth/client'

const PrivateRoute = (AuthComponent) => {
    return class Higher extends React.Component {
        static async getServerSideProps(ctx) {

            const session = await getSession(context)

            // Return props.
            return { props: { session } }
        }

        render() {
            return <AuthComponent {...this.props} />;
        }
    };
};
export default PrivateRoute;