import { FC, useReducer, useContext } from 'react';
import style from './Header.module.css';
import { I_initialState, I_action } from './Header.types';
import { UsersContext } from '../../Providers/UsersProvider';
import isValidStringVithNumbers from '../../helpers/isValidStringVithNumbers';

const initialState:I_initialState = {
    phone: '',
    email: '',
};

const reducer = (state: I_initialState, action:I_action) => {
    switch(action.type) {
        case 'updateValue': {
            return {
                ...state,
                [action.payload.name]: action.payload.value,
            };
        };
        default: {
            return state;
        };
    };
};

const Header:FC = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { sendRequest } = useContext(UsersContext);

    const setNewValue = (name:string, value: string) => {
        dispatch({
            type: 'updateValue',
            payload: { name, value }
        });
    };

    const setRequestQuery = () => {
        if(state.email === '') window.alert('Поле email не может быть пустым');
        else if(state.phone !== '' && !isValidStringVithNumbers(state.phone)) window.alert('Не валидное число');
        else sendRequest(state.email, state.phone);
    };

    return (
        <header className={style.header__wrapper}>
            <input
                type='text'
                name="email" 
                className={style.header__inp}
                placeholder='user email'
                value={state.email}
                onChange={(e) => setNewValue(e.target.name, e.target.value)}
            />
            <input 
                type='text'
                name="phone" 
                className={style.header__inp}
                placeholder='user number'
                value={state.phone}
                onChange={(e) => setNewValue(e.target.name, e.target.value)}
            />
            <button
                className={style.header__btn}
                onClick={() => setRequestQuery()}
            >
                Search user
            </button>
        </header>
    );
};

export default Header;