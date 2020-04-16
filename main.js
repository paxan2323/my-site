let link = document.querySelector('.linkstyleMain');
let theme = document.querySelector('.theme');
let b = true;
theme.onclick = function(){
  if(b == true){
    link.href = "basic-light-theme/style.css";

    b = false;
  }
  else {
    b = true;
        link.href = "styleAcad.css";
  }
};
