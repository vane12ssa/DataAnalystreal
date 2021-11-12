function move() {
    var elem = document.getElementById("myBar");   
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        elem.innerHTML = width * 1  + '%';
      }
    }
  }

function move1() {
    var elem = document.getElementById("myBar1");   
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 60) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        elem.innerHTML = width * 1  + '%';
      }
    }
  }

function move2() {
    var elem = document.getElementById("myBar2");   
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        elem.innerHTML = width * 1  + '%';
      }
    }
  }

function move3() {
    var elem = document.getElementById("myBar3");   
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 80) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        elem.innerHTML = width * 1  + '%';
      }
    }
  }

function move4() {
    var elem = document.getElementById("myBar4");   
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 95) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        elem.innerHTML = width * 1  + '%';
      }
    }
  }

function move5() {
    var elem = document.getElementById("myBar5");   
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 85) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        elem.innerHTML = width * 1  + '%';
      }
    }
  }