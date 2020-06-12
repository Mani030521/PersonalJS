import * as firebase from 'firebase';

import { firebaseConfig } from './index';


firebase.initializeApp(firebaseConfig);
const dataBase = firebase.database().ref();
