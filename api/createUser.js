import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import postNewUser from "./postNewUser"
import { FIREBASE_AUTH } from "../firebaseConfig"

const createUser = async (email, pass) =>{
    const auth = FIREBASE_AUTH
    try {
        const response = await createUserWithEmailAndPassword(auth, email, pass)
    } catch (error) {
        console.log(error.message)
    }
    postNewUser(email.replace(/\./g, '1'), "", "")
}

export default createUser