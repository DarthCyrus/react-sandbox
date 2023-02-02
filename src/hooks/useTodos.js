// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs, setDoc, doc, deleteDoc } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIRESTORE_KEY,
  authDomain: "cyrustodo.firebaseapp.com",
  projectId: "cyrustodo",
  storageBucket: "cyrustodo.appspot.com",
  messagingSenderId: "321467395992",
  appId: "1:321467395992:web:f3347e49f596c0d67585ed",
  measurementId: "G-94Y1JXS0KX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const useTodos = () => {
  const db = getFirestore(app)
  
  const getTodos = async () => {
    const todosCollection = collection(db, 'todos')
    const todosSnapshot = await getDocs(todosCollection)
    const todosList = todosSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
    return todosList
  }
  const addTodo = async (todo) => {
    await setDoc(doc(db, 'todos', crypto.randomUUID()), todo)
  }
  const updateTodo = async (id, state) => {
    await setDoc(doc(db, 'todos', id), state)
  }
  const removeTodo = async (id) => {
    await deleteDoc(doc(db, 'todos', id))
  }

  return {
    getTodos,
    addTodo,
    updateTodo,
    removeTodo, 
  }
}

export default useTodos