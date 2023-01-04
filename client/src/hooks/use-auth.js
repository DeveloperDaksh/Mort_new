import { useContext } from 'react';
// import { AuthContext } from '../contexts/jwt-context';
import { AuthContext } from '../contexts/firebase-auth-context';

export const useAuth = () => useContext(AuthContext);
