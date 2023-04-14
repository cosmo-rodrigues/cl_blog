const getUserAuthentication = () =>
  JSON.parse(localStorage.getItem('@cl_blog/user'));

const login = (user) => {
  const email = user.email;
  const password = user.password;

  const loggedUser = JSON.parse(localStorage.getItem('@cl_blog/user'));

  if (loggedUser.email === email && loggedUser.password === password) {
    return { message: 'Login successful!' };
  } else {
    return { message: 'Please try again.' };
  }
};

const logOut = () => {
  localStorage.removeItem('@cl_blog/user');

  return { message: 'Logout successful!' };
};

const singUp = (user) => {
  localStorage.setItem('@cl_blog/user', JSON.stringify(user));
  return { message: 'Sing up successful!' };
}

const isLogged = () => (getUserAuthentication() ? true : false);

export const loginService = {
  login,
  logOut,
  singUp,
  isLogged,
};
