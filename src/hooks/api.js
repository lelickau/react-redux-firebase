import { collection, getDocs } from "firebase/firestore";
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