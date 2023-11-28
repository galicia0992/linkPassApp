import { getDatabase, ref, push } from "firebase/database"
import { UtensilsIcon } from "lucide-react-native";
const postNewUser = (email, link, categoria) =>{
    const db = getDatabase()
    push(ref(db, `${email}/` + 0),{
        category: categoria,
        link: link,
        id: Date.now()
    })
    push(ref(db, `${email}/` + 1),{
        category: categoria,
        link: link,
        id: Date.now()
    })
}
export default postNewUser;