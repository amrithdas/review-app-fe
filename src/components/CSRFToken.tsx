import axios from "axios";
import { useEffect, useState } from "react";


const CSRFToken = () => {

    const [csrftoken, setcsrftoken] = useState('');

    const getCookie = (name: string) => {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    useEffect(() => {
        const fetchData = async () => {
            try{
                const baseURL = process.env.NODE_ENV === 'production'
                    ? process.env.REACT_APP_PROD_ENDPOINT
                    : process.env.REACT_APP_DEV_ENDPOINT;

                await axios.get(`${baseURL}accounts/csrf/`, {
                    withCredentials: true
               });
               const token = getCookie('csrftoken');
               if (token) {
                   setcsrftoken(token);
               }else{
                console.log("CSRF token not found in cookies");
               }
            }catch(error){
                console.log("couldnt fetch CSRF token!");
            }
        } 

        fetchData();

    }, []);

    return (
        <input type='hidden' name='csrfmiddlewaretoken' value={csrftoken} />
    )
}

export default CSRFToken;