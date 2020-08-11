import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey            : 'AIzaSyDhHlJ2cpw6KRhf7fqRbrpkarZkzdC6XGE',
	authDomain        : 'e-commerce-1ee6a.firebaseapp.com',
	databaseURL       : 'https://e-commerce-1ee6a.firebaseio.com',
	projectId         : 'e-commerce-1ee6a',
	storageBucket     : 'e-commerce-1ee6a.appspot.com',
	messagingSenderId : '474269297439',
	appId             : '1:474269297439:web:9282452b275a4efd0a1e2a',
	measurementId     : 'G-D40JM27XT7'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
