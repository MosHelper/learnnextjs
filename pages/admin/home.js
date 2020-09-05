import WithAuth from '../../components/WithAuth';

const AdminHome = ({ session }) => {
    return (
        <h2>Hi admin - {session.user.email}</h2>
    )
}

export default WithAuth(AdminHome);