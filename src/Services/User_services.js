import axios from "axios";

const URL = "http://localhost:5000/users";

const createUser= async(user) =>{
    const options = {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json',
        }
};
    const newUser = await fetch(URL,options);
    return newUser.json();
}

const getUserByEmail= async(email) => {
    const response = await fetch(`${URL}/email/${email}`, {});
    return response.json();  
  }

export {createUser, getUserByEmail};