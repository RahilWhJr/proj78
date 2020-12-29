var names = [
    "Mohammed Aleem",
    "Shanthi Ubrangala",
"Sahil Aleem",
"Rahil Aleem"
];
var images = [
  "dad.jpg",
  "mom.jpg",
  "bro.jpg",
  "me.jpg"
];
var i=0;
function nextslide() {
  document.getElementById("name").innerHTML=names[i];
  document.getElementById("album").src=images[i];
  i++;
}
