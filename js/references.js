var check=document.querySelector(".check");
check.addEventListener('click',idioma);

function idioma(){
  let id=check.checked;
  if (id==true){
     location.href="../en/referencias.html";
  }else{
    location.href="../paginas/Referencias.html";
  }
}
