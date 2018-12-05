var obj = {
  handler: function () {
    console.log("hello");
  }
};
console.log(obj.hasOwnProperty('handler')); //> true
console.log(Object.prototype.hasOwnProperty.call(obj,'handler'));