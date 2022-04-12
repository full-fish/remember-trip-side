const { user } = require("../../models");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = (req, res) => {
  abc = (n) => {
    return 123;
  };

  //   d:function(){
  //       return 'a'
  //   }
};
// exports.sayHelloInEnglish = function (n) {
//   return n * n;
// };
module.exports = {
  sayHelloInEnglish: function () {
    return "HELLO";
  },

  sayHelloInSpanish: function () {
    return "Hola";
  },
};
