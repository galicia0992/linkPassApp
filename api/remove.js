import { remove, ref, getDatabase } from 'firebase/database';
import database from "../firebaseConfig"


const remover = (id) =>{
    remove(ref(getDatabase(), `dbLinks/0/${id}`));
}

export default remover