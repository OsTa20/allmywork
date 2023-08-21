let time = setTimeout(function(){
  if(window.navigator.onLine == true){
    window.history.replaceState({},'',"html/main.html");
    window.location.href = "main.html";
  }
  else {
    window.history.replaceState({},'',"html/mybook.html");
    window.location.href = "mybook.html";
  }
},3000);  