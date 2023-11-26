import { getDatabase, ref, onValue } from "firebase/database";


const getPass = async(setListaPass) =>{
  const dbRef = ref(getDatabase());
  
  onValue(dbRef, (snapshot) =>{
    const data = snapshot.val()
    Object.values(data).map(item =>{
      setListaPass(Object.values(item[1]))
    })
  })
}
export default getPass