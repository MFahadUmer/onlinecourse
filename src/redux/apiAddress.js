const API_LINK_ADDRESS = 'https://desolate-cove-81044.herokuapp.com';
export const header = {
  header: {
    'Content-Type': 'application/json',
    Authorization: `bearer ${localStorage.getItem('token')}`,
  },
};
export default API_LINK_ADDRESS;
