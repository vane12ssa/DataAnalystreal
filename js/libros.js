var check=document.querySelector(".check");
check.addEventListener('click',idioma);
function idioma(){
  let id=check.checked;
  if (id==true){
     location.href="../en/libros.html";
  }else{
    location.href="../paginas/Libros.html";
  }
}
