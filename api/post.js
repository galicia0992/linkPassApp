import { getDatabase, ref, push } from "firebase/database"
const post = (link, categoria, email) =>{
    const db = getDatabase()
    push(ref(db, `${email.replace(/\./g, '1')}/` + 0),{
        category: categoria,
        link: link,
        id: Date.now()
    })
    
}
export default post