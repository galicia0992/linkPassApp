import { getDatabase, ref, child, get, onChildAdded, onValue } from "firebase/database";


const getLinks = async(setListaLinks) =>{
  const dbRef = ref(getDatabase());
  onValue(dbRef, (snapshot) =>{
    const data = snapshot.val()
    Object.values(data).map(item =>{
      setListaLinks(Object.values(item[0]))
    })
  })
}
export default getLinks