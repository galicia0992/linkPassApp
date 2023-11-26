import { getDatabase, ref, push } from "firebase/database"
const postPass = (pass, categoria, user) =>{
    const db = getDatabase()
    push(ref(db, "dbLinks/" + 1),{
        category: categoria,
        user: user,
        pass: pass,
        id: Date.now()
    })
    
}
export default postPass