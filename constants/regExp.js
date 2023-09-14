const email = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const password = /^(?=.*[a-zA-Z]{6,})(?=.*\d)[a-zA-Z\d]{7,}$/;


module.exports = {
  email,
  password,
 
};