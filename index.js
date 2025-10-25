const greeting= document.getElementById("greeting");
greeting.style.textAlign= "center";
greeting.style.marginTop= "50px";
const username= window.prompt("How can I help today?", "Find Necklaces");
greeting.textContent= "Welcome to Petal and Chain, " + username + "!";