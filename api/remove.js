import { remove, ref, getDatabase, child } from 'firebase/database';
import { Database } from 'firebase/database';


const remover = (id) =>{
    console.log(id)
    remove(ref(getDatabase(), `dbLinks/0/` + id));
}

export default remover