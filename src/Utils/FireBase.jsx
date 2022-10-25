import { getFirestore, collection, addDoc , getDocs, doc, getDoc, query , where} from 'firebase/firestore'

const db = () => getFirestore();

export const getCollection = (name = "") =>{
    const data = collection (db(), name)
    return getDocs(data);
}

export const getSingleDoc = (collection ="", id= "") =>{
  const data = doc (db(), collection, id)
  return getDoc(data);
}

export const filterCollection = (name ="", condition= ["","",""]) =>{
  const data = query (collection(db(), name ) ,where (condition[0], condition[1], condition[2]))
  return getDocs(data);
}

export const addSingleDoc = (toAdd) => {
    const data = collection(db(), "Cart")
  return (
    addDoc(data, toAdd)
  )
}
