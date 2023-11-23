import { remove, ref, getDatabase } from 'firebase/database';
import database from "../firebaseConfig"


const remover = (id) =>{
    const dbRef = ref(getDatabase());
    remove(ref(dbRef, `dbLinks/0/` + id));
}

export default remover