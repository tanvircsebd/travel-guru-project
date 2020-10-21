import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";



export const initializeLoginFramework = () =>{
    if(firebase.apps.length === 0 ){
        firebase.initializeApp(firebaseConfig);
    }
}
//google sign in method
export const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider)
    .then(res => {
        const {displayName,email,photoURL} = res.user;
        const SignnedInUser = {
            isSignedIn: true,
            name: displayName,
            email: email,
            photo: photoURL,
            success: true
          }
        return SignnedInUser;

      }).catch(function(error) {
        console.log(error);
        console.log(error.message);
      });
}
// Sign in with facebook 

export const handleFBSignIn = () => {
    const facebookProvider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(facebookProvider)
    .then((res)=> {
        const {displayName,email,photoURL} = res.user;
        const SignnedInUser = {
            isSignedIn: true,
            name: displayName,
            email: email,
            photo: photoURL,
            success: true
          }
          return SignnedInUser;
      }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        console.log(errorMessage);

      });
  }



//user name and password create account
export const createSignInWithEmailAndPassword = (name, email, password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(res => {
    const newUserInfo = res.user;
    newUserInfo.error = '';
    newUserInfo.success = true;
    updateUserName(name);
    varifyEmail();
    return newUserInfo;
  })
  .catch((error) => {
    const newUserInfo = {};
    newUserInfo.error = error.message;
    newUserInfo.success = false;
    return newUserInfo;
  });
}

//login function
export const signInwithEmailAndPassword = (email,password) =>{
    return firebase.auth().signInWithEmailAndPassword(email, password)
    .then(res =>{
        const newUserInfo = res.user;
        newUserInfo.error = '';
        newUserInfo.success = true;
        return newUserInfo;
        
      })
      .catch((error) => {
        const newUserInfo = {};
        newUserInfo.error = error.message;
        newUserInfo.success = false;
        alert(error.message);
        return(newUserInfo);
      });
}

const updateUserName = name =>{
    const user = firebase.auth().currentUser;
    user.updateProfile({
      displayName: name,
    }).then(() =>{
      console.log('user name updated successfully');
    }).catch(function(error) {
      console.log(error);
    });
  }

  export const handleSignOut = () => {
    return firebase.auth().signOut()
      .then(res => {
        const signOutUser = {
          isSignedIn: false,
          name: '',
          email: '',
          photo: ''
        }
        return signOutUser;
      })
      .catch(error => {
        console.log(error);
      });
  }

  export const resetPasswords =(email) =>{
    let auth = firebase.auth();    
    auth.sendPasswordResetEmail(email).then(function() {
      // Email sent.
    }).catch(function(error) {
      // An error happened.
    });
  }

  const varifyEmail = () => {
    var user = firebase.auth().currentUser;
    user.sendEmailVerification().then(function () {
  
    }).catch(function (error) {
  
    });
  }