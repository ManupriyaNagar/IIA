// src/utils/baseURL.js

/**
 * Returns the backend base URL depending on environment
 * - In development (Node env = "development"), points to your local server
 * - Otherwise (production), points to your live domain
 */
const baseURL = () => {
    if (process.env.NODE_ENV === 'development') {
      return 'http://localhost:8000'
    }
    return 'https://iiagurgaon.com/backend'
  }
  
  export default baseURL
  