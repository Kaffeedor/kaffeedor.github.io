var count = 0;
var countButton = document.getElementById("countButton");
var displayCount = document.getElementById("displayCount");
countButton.onclick = function(){
  count++;
  displayCount.innerHTML = count;
}