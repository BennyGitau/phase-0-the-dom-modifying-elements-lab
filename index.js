// Write your code here
//DOM modification

main.remove();
const newHeader = document.createElement("h1");
newHeader.id = "victory"
newHeader.textContent = "Benny is the champion";
document.body.append(newHeader);