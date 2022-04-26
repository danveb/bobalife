/* AuthService will handle HTTP requests with axios */ 
import axios from "axios"; 
// remember proxy: localhost:4000 (backend) 
// const API_URL = "/api/users/"; 

// Register user
const register = async (userData) => {
    // make a POST request and pass in userData to URL 
    // const response = await axios.post(API_URL, userData); 
<<<<<<< HEAD

=======
    
>>>>>>> 6fd14f540dbef904436b5465f42ca8c362c5d753
    // use process.env (deployment)
    const response = await axios.post(process.env.REACT_APP_API_URL, userData); 
    if(response.data) {
        // save user (token) into localStorage as string
        localStorage.setItem("user", JSON.stringify(response.data)); 
    }; 
    return response.data; 
};

// Login user
const login = async (userData) => {
    // const response = await axios.post(API_URL + 'sign_in', userData);
<<<<<<< HEAD
    
=======

>>>>>>> 6fd14f540dbef904436b5465f42ca8c362c5d753
    // use process.env (deployment)
    const response = await axios.post(process.env.REACT_APP_API_URL + '/sign_in', userData);
  
    if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }; 
  
    return response.data;
};

// Logout user 
const logout = () => {
    // removeItem from localStorage
    localStorage.removeItem("user"); 
}; 

const authService = {
    register, 
    logout, 
    login,
}; 

export default authService