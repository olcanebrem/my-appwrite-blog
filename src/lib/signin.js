import { AppwriteException ,Account} from "appwrite";
import { client } from "./appwrite";
import { getSessionUsername } from "./username";

var session;
const account = new Account(client);

try{
    session = await account.getSession('current');
    const jwtToken = session.jwt;
    // JWT token'ı saklayın ve kullanın
    console.log("Session var");
    await getSessionUsername();
}   catch(e) {
    console.log("Session not registred");

    if  (e instanceof AppwriteException) {
        console.log('Appwwrite exception', e.message);
    } else {
        console.log('unexpected',e);
    }
}   

if(session) {
    const jwtToken = session.jwt;
    console.log(session);

    console.log('JWT Token:', jwtToken);
    // JWT token'ı saklayın ve kullanın
    window.location.href = "../";
} else {

    
    const format = document.getElementById("login-form");
    
    format.addEventListener("submit", async (e) => {
        e.preventDefault();
        
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        
        try {
            const result = await account.createEmailSession(
                //jwtToken,
                email,
                password
            );  
            
            console.log(result); // Output the response
            console.log('Session created successfully');
            window.location.href = "../";
            
        } catch (error) {
            console.error('Error creating session:', error);
            
            if ( e instanceof AppwriteException){
                console.log('AppwriteException:', error.message);
                
            } else {
                console.log('Method Not Allowed');
            }
        }
    });
}

