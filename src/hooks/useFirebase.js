import initializeAuthentication from "../components/Firebase/Firebase-init";
import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged , createUserWithEmailAndPassword} from "firebase/auth";
import { useEffect, useState } from "react";


initializeAuthentication();

const useFirebase =()=>{
const auth =getAuth();
const [user,setUser]=useState({})
const [email,setEmail] =useState("");
const [password,setPassword] =useState("");
const [error,setError] = useState("")
const googleProvider = new GoogleAuthProvider();

const signInUsingGoogle =()=>{
 return  signInWithPopup(auth,googleProvider)
  .catch(error => {
    setError(error.message);
    });
}

const logOut = ()=>{
  signOut(auth)
  .then(()=>{
    setUser({})
  })
}

useEffect(()=>{
  const unsubscribe  =onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } 
    });
    return unsubscribe;
  },[])

  const  handleSignup=e=>{
    e.preventDefault();
    if(password.length < 6 ){
      setError(' Password should be at least 6 characters')
      return;
    }

  return createUserWithEmailAndPassword(auth,email,password)
    .then(result =>{
      const users = result.user;
      setUser(users)
      setError('');
    })
    .catch(error => {
      setError(error.message);     
      });
   
  }
   const handleEmailChange = e=>{
     setEmail(e.target.value);
   }
   const handlePasswordChange = e=>{
     setPassword(e.target.value);
   }


 

return{
  user,
  error,
  signInUsingGoogle,
  logOut,
  handleSignup,
  handleEmailChange,
  handlePasswordChange
 
}

}

export default useFirebase;