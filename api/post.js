import { getDatabase, ref, set } from "firebase/database"
const post = (link, categoria) =>{
    const db = getDatabase()
    set(ref(db, "dbLinks/" + Date.now()),{
        Category: categoria,
        Link: link
    })
}
export default post