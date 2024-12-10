import axios from 'axios';

const BASE_URL = 'https://api.github.com';

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data; // Return user data
  } catch (error) {
    throw new Error('User not found'); // Throw error if API call fails
  }
};