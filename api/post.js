import { getDatabase, ref, set, push } from "firebase/database"
const post = (link, categoria) =>{
    const db = getDatabase()
    push(ref(db, "dbLinks/" + 0),{
        Category: categoria,
        Link: link
    })
    
}
export default post