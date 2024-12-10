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

export const fetchAdvancedUsers = async (query) => {
    try {
      const response = await axios.get(`${BASE_URL}/search/users`, {
        params: { q: query },
      });
      return response.data; // Return data directly
    } catch (error) {
      throw new Error('Failed to fetch users');
    }
  };