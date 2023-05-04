import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Configuring firebase
const firebaseConfig = {
	apiKey: "AIzaSyD986IxkoKerCP0HUMfg28e0-_KnuhTfeM",
	authDomain: "study-helper-ai.firebaseapp.com",
	projectId: "study-helper-ai",
	storageBucket: "study-helper-ai.appspot.com",
	messagingSenderId: "48909980032",
	appId: "1:48909980032:web:cb95e45899964a9620b165",
};
initializeApp(firebaseConfig);

//!------Login Setup------
//Setting the provider to use google sign-in facility
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
	prompt: "select_account",
});
export const auth = getAuth();
export const popupSignin = () => signInWithPopup(auth, provider);

//Calling getFirestore function to work with firestore
export const database = getFirestore();

export const currentUser = auth.currentUser;

//Creating user document to store details in firebase datastore
export const createUserDocument = async (userData, otherData = {}) => {
	const userDocRef = doc(database, "users", userData.uid);
	const userSnapshot = await getDoc(userDocRef);

	if (!userSnapshot.exists()) {
		const { displayName, email } = userData;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
				...otherData,
			});
		} catch (error) {
			console.error("Error creating the user", error.message);
		}
	}

	return userDocRef;
};

//Authentication state change listener
export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);

//function to signout
export const signOutUser = async () => await signOut(auth);
