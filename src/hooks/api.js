import { collection, doc, deleteDoc, getDocs, addDoc, query, where } from "firebase/firestore";
import {db} from '../firebase';

export const getDataFromApi = async (collectionDB) => {

    const collectioRef = collection(db, collectionDB);

    try {
        const docs = await getDocs(collectioRef);
        return docs
    } catch (e) {
        console.log("Error getting cached document:", e);
    }

}

export const getDataFromId = async (collectionDB, params) => {

    const q = query(collection(db, collectionDB), where("listId", "==", params));

    try {
        const querySnapshot = await getDocs(q);
        const items = querySnapshot.docs.map(doc => (
            {
                id: doc.id,
                ...doc.data()
            }
        ))
        return items
    } catch (e) {
        console.log("Error getting cached document:", e);
    }
}

export const addNew = async (collectionDB, data) => {

    try {
        console.log(data);
        const docRef = await addDoc(collection(db, collectionDB), {
            ...data,
            completed: false

        });
        console.log(docRef);
    } catch (e) {
        console.log("Error getting cached document:", e);
    }
}

export const deleteTodo = async (collectionDB, todoId) => {

    try {
        await deleteDoc(doc(db, collectionDB, todoId));
    } catch (e) {
        console.log("Error getting cached document:", e);
    }
}




