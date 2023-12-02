import { getDatabase, ref, push } from "firebase/database"
const postPass = (pass, categoria, user, emailPass) =>{
    const db = getDatabase()
    push(ref(db, `${emailPass}/1`),{
        category: categoria,
        user: user,
        pass: pass,
        id: Date.now()
    })
    
}
export default postPass