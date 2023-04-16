const getUser = () => {
  return JSON.parse(localStorage.getItem('@cl_blog/user'));
};

const login = (username) => {
  if (getUser(username)) {
    return { status: 'success', message: 'Login successful.' };
  } else {
    return { status: 'fail', message: 'User not registered.' };
  }
};

const logOut = () => {
  localStorage.removeItem('@cl_blog/user');
  return { status: 'success', message: 'Logout successful!' };
};

const singUp = (username) => {
  if (getUser(username))
    return { status: 'fail', message: 'User already exists.' };

  localStorage.setItem('@cl_blog/user', JSON.stringify({ username }));
  return { status: 'success', message: 'User created successfully!' };
};

export const loginService = {
  login,
  logOut,
  singUp,
  getUser,
};
