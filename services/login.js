const getUserByUserName = (username) => {
  const users = JSON.parse(localStorage.getItem('@cl_blog/user'));
  if(users) return users.find((user) => user.username === username);
};

const getAllUsers = () => JSON.parse(localStorage.getItem('@cl_blog/user'));

const removeUserByUserName = (username) => {
  const users = JSON.parse(localStorage.getItem('@cl_blog/user'));
  const newUsers = users.filter((user) => user.username !== username);
  localStorage.setItem('@cl_blog/user', JSON.stringify(newUsers));
};

const getUserAuthentication = () =>
  JSON.parse(localStorage.getItem('@cl_blog/user'));

const login = (username) => {
  if (getUserByUserName(username)) {
    return { message: 'Login successful!' };
  } else {
    return { message: 'Please try again.' };
  }
};

const logOut = (username) => {
  removeUserByUserName(username);
  return { message: 'Logout successful!' };
};

const singUp = (username) => {
  if (getUserByUserName(username)) return { message: 'User already exists.' };

  let users = JSON.parse(localStorage.getItem('@cl_blog/user')) || [];

    users.push({ username });

    localStorage.setItem('@cl_blog/user', JSON.stringify(users));
    return { message: 'User created successfully!' };
};

const isLogged = () => (getUserAuthentication() ? true : false);

export const loginService = {
  login,
  logOut,
  singUp,
  isLogged,
  getAllUsers
};
