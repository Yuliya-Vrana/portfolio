const imgBox = document.querySelectorAll(".tabs__imgBox");
const contantBox = document.querySelectorAll(".tabs__contantBox");

for (let i=0; i<imgBox.length; i++){
	imgBox[i].addEventListener("mouseover", function(){
 		for (let i=0; i<contantBox.length; i++){
 			contantBox[i].className = "tabs__contantBox";
 		}
 		document.getElementById(this.dataset.id).className = "tabs__contantBox active";

 		for (let i=0; i<imgBox.length; i++){
 			imgBox[i].className = "tabs__imgBox";
 		}
 		this.className = "tabs__imgBox active";



 	})
}  


