import { createContext, FC, useState } from 'react';
import { I_user } from '../types';

export const UsersContext = createContext(null);

const UsersProvider: FC<any> = ({
    children,
}) => {
    const [usersList, setUsersList] = useState<I_user[] | null>(null);

    const sendRequest = (email: string, phone:string) => {
        fetch(`http://localhost:999/user?email=${email}&number=${phone}`)
            .then((resp) => resp.json())
            .then((resp) => setUsersList(resp))
            .catch((err) => console.log(err));
    };

    return (
        <UsersContext.Provider
            value={{
                sendRequest: (email: string, phone:string) => sendRequest(email, phone),
                usersList,
            }}
        >
            { children }
        </UsersContext.Provider>
    );
};

export default UsersProvider;