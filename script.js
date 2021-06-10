var score=0;

function clicked() {
    console.log("Clicked");
    score++;
    document.getElementById("scoreSpan").innerHTML = score;
}
