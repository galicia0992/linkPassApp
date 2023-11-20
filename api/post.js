import { getDatabase, ref, set, push } from "firebase/database"
const post = (link, categoria) =>{
    const db = getDatabase()
    push(ref(db, "dbLinks/" + 0),{
        category: categoria,
        link: link,
        id: Date.now()
    })
    
}
export default post