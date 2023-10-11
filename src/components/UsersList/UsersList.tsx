import { FC, useContext } from 'react';
import { UsersContext } from '../../Providers/UsersProvider';
import { I_user } from '../../types';
import style from './UsersList.module.css';

const App:FC = () => {
    const { usersList } = useContext(UsersContext);

    if(
        usersList === null || 
        usersList.length === 0
    ) return <div className={style.message}>No users...</div>

    return (
      <section>
        {
            usersList.map((el: I_user) => 
                <div
                    className={style.user}
                >
                    <p>Email: {el.email}</p>
                    <p>Number: {el.number}</p>
                </div>
            )
        }
      </section>
    );
};

export default App;