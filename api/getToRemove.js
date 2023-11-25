import { getDatabase, ref, onValue } from "firebase/database";


const getLinksToRemove = async(setIdListas) =>{
  const dbRef = ref(getDatabase());
  onValue(dbRef, (snapshot) =>{
    const data = snapshot.val()
    Object.values(data).map(item =>{
      setIdListas(item)
    })
  })
}
export default getLinksToRemove