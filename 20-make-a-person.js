const Person = function(firstAndLast) {
  // Only change code below this line

  let nameArr = firstAndLast.split(' ');

  // Complete the method below and implement the others similarly
  this.getFullName = function() {
    return nameArr[0]+ ' ' + nameArr[1];
  };

  this.getFirstName = function() {
    return nameArr[0];
  }

  this.getLastName = function(){
    return nameArr[1];
  }

  this.setFirstName = function(first) {
    return nameArr[0] = first;
  }

  this.setLastName = function(last) {
    return nameArr[1] = last;
  }

  this.setFullName = function(firstAndLast) {
    return nameArr = firstAndLast.split(' ');
  }

  return firstAndLast;
};

const bob = new Person('Bob Ross');
bob.getFullName();