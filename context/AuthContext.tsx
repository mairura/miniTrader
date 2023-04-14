import { User } from '@/types';
import { ReactNode, createContext, useReducer } from 'react';
import jwt_token from 'jwt-decode';

interface IAuthContext {
  user: User | null;
  logout: () => void;

  login: (data: { token: string; user: User }) => void;
}

const initialState = {
  user: null,
};

const defaultContext: IAuthContext = {
  ...initialState,
  logout: () => {},
  login: (_data: { token: string; user: User }) => {},
};

const AuthContext = createContext(defaultContext);

const authReducer = (state: any, action: { type: string; payload?: any }) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

let token =
  typeof window !== 'undefined' ? localStorage.getItem('token') : null;

if (token) {
  let decoded: any = jwt_token(token);

  if (decoded.exp * 1000 < Date.now()) {
    localStorage.removeItem('token');
  } else {
    initialState.user = decoded.user;
  }
}

const AuthProvider = ({ children }: { children: ReactNode | ReactNode[] }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = (data: { token: string; user: User }) => {
    localStorage.setItem('token', data.token);

    dispatch({
      type: 'LOGIN',
      payload: data.user,
    });
  };

  const logout = () => {
    localStorage.removeItem('token');

    dispatch({
      type: 'LOGOUT',
    });
  };

  return (
    <AuthContext.Provider value={{ user: state.user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
