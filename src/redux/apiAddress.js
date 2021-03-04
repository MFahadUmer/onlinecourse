const API_LINK_ADDRESS = 'http://127.0.0.1:3001';
export const header = {
  header: {
    'Content-Type': 'application/json',
    Authorization: `bearer ${localStorage.getItem('token')}`,
  },
};
export default API_LINK_ADDRESS;
