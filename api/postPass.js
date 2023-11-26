import { getDatabase, ref, push } from "firebase/database"
const postPass = (pass, categoria) =>{
    const db = getDatabase()
    push(ref(db, "dbLinks/" + 1),{
        category: categoria,
        pass: pass,
        id: Date.now()
    })
    
}
export default postPass