function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }

  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }

  if (screen.width > 720) {

    var left = 1;
    var right = 3;
    function show() {
      for (var i = left; i <= right; i++) {
        document.getElementById("b" + i).style.display = "inline-block";

        document.getElementById("c" + i).style.display = "inline-block";
        document.getElementById("a" + i).style.display = "inline-block";
    
      }
    }
    function leftmove(){
      if (left <= 3 && right <= 6) {
    
        document.getElementById("b" + left).style.display = "none";
        left = left + 1;
        right = right + 1;
        for (i = left; i <= right; i++) {
        document.getElementById("b" + i).style.display = "inline-block";
        
        }
        } else 
        return;
    }
    function moveleft()
    {
        if (left <= 3 && right <= 6) {
    
    document.getElementById("c" + left).style.display = "none";
    left = left + 1;
    right = right + 1;
    for (i = left; i <= right; i++) {
    document.getElementById("c" + i).style.display = "inline-block";
    
    }
    } else 
    return;
    }
    function rightmove() {
      if (left > 1 && right > 3 ) {
    
        document.getElementById("b" + right).style.display = "none";
        left = left - 1;
        right = right - 1;
        for (i = left; i <= right; i++) {
          document.getElementById("b" + i).style.display = "inline-block";
    
        }
      } else {
        return;
      }
    
    }
    function moveright() {
      if (left > 1 && right > 3 ) {
    
        document.getElementById("c" + right).style.display = "none";
        left = left - 1;
        right = right - 1;
        for (i = left; i <= right; i++) {
          document.getElementById("c" + i).style.display = "inline-block";
    
        }
      } else {
        return;
      }
    
    }
    function movleft()
    {
        if (left <= 3 && right <= 6) {
    
    document.getElementById("a" + left).style.display = "none";
    left = left + 1;
    right = right + 1;
    for (i = left; i <= right; i++) {
    document.getElementById("a" + i).style.display = "inline-block";
    
    }
    } else 
    return;
    }
    function movright() {
      if (left > 1 && right > 3 ) {
    
        document.getElementById("a" + right).style.display = "none";
        left = left - 1;
        right = right - 1;
        for (i = left; i <= right; i++) {
          document.getElementById("a" + i).style.display = "inline-block";
    
        }
      } else {
        return;
      }
    
    }
    }
    
    
    
    else{
      function show(){
        return;
      }
    }
  