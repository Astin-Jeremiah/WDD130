var modal = document.getElementById("myModal");
var link = document.getElementsByClassName("mod");
var sp = document.getElementsByClassName("end");
var j;
var k

for (j = 0; j < link.length; j++) {
  link[j].addEventListener("click", function() {
    modal.style.display = "block";
  });
}

for (k = 0; k < sp.length; k++) {
  sp[k].addEventListener("click", function() {
    modal.style.display = "none";
  });
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    if (this.className === "open") {
      this.className = "closed";
    } else {
      this.className = "open";
    }

    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

function check() {
  var action = document.getElementById("check");
  action.checked = true;
  slider();
}

function uncheck() {
  var action = document.getElementById("check");
  action.checked = false;
  slider();
}



function slider() {
  var checkBox = document.getElementById("check");
  var dev = document.getElementById("dev");
  var des = document.getElementById("des");
  console.log(des);
  if (checkBox.checked == true){
    dev.classList.remove("hide");
    des.classList.add("hide");
  } else if (checkBox.checked == false){
     des.classList.remove("hide");
     dev.classList.add("hide");
  }
}