const colors=["red","green","blue","yellow","#d3d3d3"]
let index=0
function ChangeColor(){
const x=document.getElementById("color") 
x.style.backgroundColor=colors[index]
index+=1
if(index>colors.length-1){
    index=0
}


}
function reset(){
    const x=document.getElementById("color") 
    x.style.backgroundColor=colors[4]
    
    
    }