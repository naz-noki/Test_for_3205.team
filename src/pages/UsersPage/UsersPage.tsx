import { FC } from 'react';
import Header from '../../components/Header/Header';
import UsersList from '../../components/UsersList/UsersList';
import UsersProvider from '../../Providers/UsersProvider';

const UsersPage:FC = () => {

    return (
        <main>
            <UsersProvider>
                <Header />
                <UsersList />
            </UsersProvider>
        </main>
    );
};

export default UsersPage;