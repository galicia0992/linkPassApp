import { getDatabase, ref, child, get } from "firebase/database";

const getLinks = async() =>{
    const dbRef = ref(getDatabase());
get(child(dbRef, `dbLinks/`)).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});
}
export default getLinks