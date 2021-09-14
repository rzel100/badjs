function thisIsBadBruh() {
  var theFrame = 0;
  var badBruh = setInterval(function(){
    if(theFrame >= 6571){
      clearInterval(badBruh);
      document.getElementById("badapple").innerHTML = "Finished !. Thanks For Watching... RzeL... :3";
    } else {
      document.getElementById("badapple").innerHTML = badAppleComment[theFrame];
    };
    theFrame += 1;
  }, 33);
};
