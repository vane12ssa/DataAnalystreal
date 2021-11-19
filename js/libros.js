var check=document.querySelector(".check");
check.addEventListener('click',idioma);

function idioma(){
  let id=check.checked;
  if (id==true){
     location.href="../paginas/libros.html";
  }else{
    location.href="../en/Libros.html";
  }
}
