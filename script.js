async function login(){

const API =
 "https://script.google.com/macros/s/AKfycbyRNotUNftM3ReULoxb_FtqpelvAxSTuCnMJbo-ihl0L-Ts-IJVQmrb7QBNCSB7MJJKCg/exec";
 const response = await fetch(API,{
  method:"POST",
  body:JSON.stringify({
   action:"login",
   username:
     document.getElementById("username").value,
   password:
     document.getElementById("password").value
  })
 });

 const data = await response.json();

 if(data.success){

  localStorage.setItem(
    "student",
    JSON.stringify(data)
  );

  location.href="dashboard.html";

 }else{
  alert(data.message);
 }

}
