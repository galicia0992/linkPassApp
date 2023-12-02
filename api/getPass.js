import { getDatabase, ref, onValue } from "firebase/database";

const getPass = async(setListaPass, emailPass) =>{
  console.log(emailPass)
  const db = getDatabase();
  const starCountRef = ref(db, `${emailPass}/1`);
  onValue(starCountRef, (snapshot) =>{
    const data = snapshot.val()
    let arr = []
    Object.values(data).map(item =>{
      arr.push(item);
    })
    setListaPass(arr)
  })
}
export default getPass