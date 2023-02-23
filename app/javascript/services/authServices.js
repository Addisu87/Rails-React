import client from '../redux/axios';

const login = async (email, password) => {
  await client
    .post('/signin', {
      email,
      password
    })
    .then((response) => {
      if (response.data.email) {
        localStorage.setItem('token', JSON.stringify(response.data));
      }
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

const register = async (username, email, password) => {
  await client
    .post('/signup', {
      username,
      email,
      password
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

const logout = async () => {
  localStorage.removeItem('user');
  return await client.delete('/signout').then((response) => {
    return response.data;
  });
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('token'));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser
};

export default AuthService;
