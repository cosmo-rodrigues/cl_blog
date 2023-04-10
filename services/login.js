import { post } from './api';
import { ROLES } from './constants';

const storageNames = [
  { name: '@cl_blog/user', keyData: 'user', isJson: true },
  { name: '@cl_blog/token', keyData: 'token', isJson: false },
];

const getUserAuthentication = () =>
  JSON.parse(localStorage.getItem('@cl_blog/user'));

const isAdmin = () => checkCurrentUserRole('admin');
const isUser = () => checkCurrentUserRole('user');

const checkCurrentUserRole = (sourceName) =>
  getUserAuthentication()?.role === sourceName;

const signIn = (user) =>
  post({ type: 'user', service: '/login', data: user });

const signOut = () =>
  storageNames.forEach((item) => localStorage.removeItem(item.name));

const isLogged = () => (getUserAuthentication() ? true : false);

const getToken = () => localStorage.getItem('@cl_blog/token');

const removeToken = () => localStorage.removeItem('@cl_blog/token');

const isValidRoles = (currentUser = {}) => {
  ROLES.some((routeRole) =>
    currentUser.role === routeRole ? true : false
  );
};

export const loginService = {
  getUserAuthentication,
  getToken,
  isAdmin,
  isLogged,
  isValidRoles,
  isUser,
  removeToken,
  signIn,
  signOut,
};
