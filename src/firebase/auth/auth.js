export default class Auth{
  constructor(){
    this.test = "test"
  }

  signUp({ email, password, errorHandler, successHandler,firebase }) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(function(){
        successHandler();
      })
      .catch(function(error) {
        if(error)
          errorHandler(error)
      });
  }

  signIn({email, password, errorHandler, successHandler, firebase}) {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(()=>{
      successHandler();
    })
    .catch(function(error) {
      if(error)
        errorHandler(error)
    })
  }

  signOut({sucessHandler , erroHandler, firebase}) {
    firebase.auth().signOut().then(function() {
      //Do signout stuff
    }).catch(function(error) {
      // An error happened.
    });
  }

}
