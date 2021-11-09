function truthCheck(collection, pre) {

  let every = collection.every(elem => {
    if(elem[pre] == null || NaN || undefined || ''){
      return false;
    } else if( elem[pre] > 0 || elem[pre].length > 1){
      return true;
    }
  })
  
  return every;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"},
            {"user": "Dipsy", "sex": "male"},
            {"user": "Laa-Laa", "sex": "female"},
            {"user": "Po", "sex": "female"}], 
            "sex");