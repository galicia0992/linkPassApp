import { remove, ref, getDatabase, child } from 'firebase/database';
import { Database } from 'firebase/database';


const removePass = (id) =>{
    console.log(id)
    remove(ref(getDatabase(), `dbLinks/1/` + id));
}

export default removePass