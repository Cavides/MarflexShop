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
    return newUser;
}

export {createUser};