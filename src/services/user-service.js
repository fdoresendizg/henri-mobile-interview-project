import API from '../utils/api';

export const GetUsers = async () => {
  return await API.get("/users");
}
