import firebase_app from "../config";
import { getFirestore, doc, setDoc, getDoc, QuerySnapshot } from "firebase/firestore";
import { PersonalInfo } from "@/typings";

const db = getFirestore(firebase_app);
const COLLECTION = "user_details";

export const updateUserData = async (id: string, data: PersonalInfo) => {
    let result = false;
    let error = null;
    try {
        console.log('here');
        await setDoc(doc(db, COLLECTION, id), data, {
            merge: true,
        });
        result = true;
    } catch (e) {
        error = e;
    }

    return { result, error };
}

export const getUserData = async (id: string) => {
    let result = null;
    let error = null;
    try {
        const { city, country, firstName, lastName, description, phoneNumber, email } = (await getDoc(doc(db, COLLECTION, id)) as any)._document.data.value.mapValue.fields;
        result = { city: city.stringValue, country: country.stringValue, firstName: firstName.stringValue, lastName: lastName.stringValue, description: description.stringValue, phoneNumber: phoneNumber.stringValue, email: email.stringValue };
    } catch (e) {
        error = e;
    }

    return { result, error }
}