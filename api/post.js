import { getDatabase, ref, set, push } from "firebase/database"
const post = (link, categoria) =>{
    const db = getDatabase()
    const newPush = push(ref(db, "dbLinks/" + 0),{
        Category: categoria,
        Link: link
    })
    const elKey = newPush.key
    console.log(elKey)
}
export default post