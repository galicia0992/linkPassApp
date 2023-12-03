import { remove, ref, getDatabase, child } from 'firebase/database';
import { Database } from 'firebase/database';



const remover = (id, email) =>{
    console.log(id)
    remove(ref(getDatabase(), `${email}/0/` + id));
}

export default remover