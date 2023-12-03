import { remove, ref, getDatabase, child } from 'firebase/database';
import { Database } from 'firebase/database';


const removePass = (id, email) =>{
    console.log(id)
    remove(ref(getDatabase(), `${email}/1/` + id));
}

export default removePass