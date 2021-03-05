const API_LINK_ADDRESS = 'http://localhost:3001';
export const header = {
  header: {
    'Content-Type': 'application/json',
    Authorization: `bearer ${localStorage.getItem('token')}`,
  },
};
export default API_LINK_ADDRESS;
