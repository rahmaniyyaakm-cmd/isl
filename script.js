async function login(){

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
