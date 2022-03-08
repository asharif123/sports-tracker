export function validateLoginEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  
  export function checkLoginPassword(input) {
    //must have at least 1 uppercase, lowercase and 8 characters!
    const passw = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (input.match(passw)) {
      return true;
    }
    return false;
  }


  export function checkUserName(input) {
  //must have at least 6 characters!
    const username = /^([a-zA-Z0-9]{6,})$/;
    if (input.match(username)) {
      return true;
    }
  return false;
}

  