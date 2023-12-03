import { getDatabase, ref, onValue } from "firebase/database";


const getLinksToRemove = async(setIdListas, email, n) =>{
  const db = getDatabase();
  const starCountRef = ref(db, `${email}/${n}`);
  onValue(starCountRef, snapshot => {
    const data = snapshot.val();
    
    [data].map(item => {
      setIdListas(item);
    });
    
  });
}
export default getLinksToRemove