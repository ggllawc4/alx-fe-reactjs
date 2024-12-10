import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users?q';

/**
 * Fetch users based on search query.
 * @param {string} query - Search query for GitHub users (e.g., username, location, repos).
 * @returns {Promise<Object>} - API response containing matching users.
 */
export const fetchAdvancedUsers = async (query) => {
    try {
      // Construct API URL
      const url = `${BASE_URL}${query}`;
      
      // Make API call
      const response = await axios.get(url);
      return response.data; // Return the results
    } catch (error) {
      console.error('Error fetching advanced users:', error);
      throw new Error('Failed to fetch users');
    }
  };
  
  /**
   * Helper to build a search query string.
   * @param {Object} params - Search parameters (username, location, minRepos).
   * @returns {string} - Query string for GitHub Search API.
   */
  export const buildQuery = ({ username, location, minRepos }) => {
    const queryParts = [];
  
    // Add username to the query
    if (username) {
      queryParts.push(`user:${username}`);
    }
  
    // Add location to the query
    if (location) {
      queryParts.push(`location:${location}`);
    }
  
    // Add minimum repositories to the query
    if (minRepos) {
      queryParts.push(`repos:>${minRepos}`);
    }
  
    //Combine all query parts with a space
    return queryParts.join(' ');
  };