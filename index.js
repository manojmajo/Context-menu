var apps = angular.module('app',[])
apps.controller("svg",function($scope){


    //Make the DIV element draggagle:
    dragElement(document.getElementById("mydiv"));
    
    function dragElement(elmnt) {
      var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
      if (document.getElementById(elmnt.id + "header")) {
        /* if present, the header is where you move the DIV from:*/
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
      } else {
        /* otherwise, move the DIV from anywhere inside the DIV:*/
        elmnt.onmousedown = dragMouseDown;
      }
    
      function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
      }
    
      function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // parnet div ..
        var parent= document.getElementById("parent") ,  

            parentW = parent.clientWidth ,
            parentH = parent.clientHeight ;
            maxX = parentW - elmnt.offsetWidth ,
            maxY = parentH - elmnt.offsetHeight ;
        console.log(document.documentElement)

        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        
        // restriction .. 
        
       let position = parent.getBoundingClientRect();
       const x = position.left;
       const y = position.top;
       console.log(x, y)

        if((elmnt.offsetTop - pos2) <= maxY+y && (elmnt.offsetTop - pos2) >= y){
          elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        }
        if((elmnt.offsetLeft - pos1) <= maxX+x && (elmnt.offsetLeft - pos1) >= x){
          elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }
        
        
      }
    
      function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
      }
    }





















































































//     $scope.contextMenu = document.getElementById("context-menu");
//     $scope.parent = document.getElementById ("parent")
//     $scope.container= document.querySelector("body");

//     $scope.container.addEventListener("contextmenu", (event) => {
//     event.preventDefault();
//     console.log(event)

//     // const { clientX: mouseX, clientY: mouseY } = event;

//     $scope.mouseX1 = event.clientX
//     let mouseY = event.clientY

//     $scope.contextMenu.style.top = `${$scope.mouseX1mouseY}px`;
//     $scope.contextMenu.style.left = `${$scope.mouseX1mouseX}px`;

//     $scope.contextMenu.classList.add("visible");
// });


// $scope.container.addEventListener("dblclick", (e) => {
//     if (e.target.offsetParent != $scope.contextMenu) {
//       $scope.contextMenu.classList.remove("visible");
//     }
//     console.log(e.target.offsetChild)
//     console.log(e.target.offsetParent)
// });


// $scope.contextMenu.addEventListener("mousedown", (e) =>{
//     $scope.movemenu = true
// })

// $scope.container.addEventListener("mousemove" , (e) =>{

//     let mouseX = e.clientX
//     let mouseY = e.clientY

//     // var boun1=document.getElementById("parent").offsetWidth - document.getElementById("context-menu").offsetWidth;
//     // var boun2=document.getElementById("parent").offsetHeight - document.getElementById("context-menu").offsetHeight;



//     if(($scope.movemenu)){
//         $scope.contextMenu.style.top = `${mouseY}px`;
//         $scope.contextMenu.style.left = `${mouseX}px`;
//         console.log($scope.mouseX1)
//         console.log(mouseX)



//     }
//     if(($scope.contextMenu.style.top == $scope.parent.style.top) & ($scope.contextMenu.style.right == $scope.parent.style.right)){
//       $scope.movemenu = false

//     }

//     // let drag = $scope.contextMenu.offsetWidth 
//     // // let drag = $scope.contextMenu.offsetWidth / 2

//     // let parentwidth = $scope.parent.offsetWidth

//     // console.log(drag)
//     // let value = mouseX + drag
//     // console.log(value)
//     // if(value == parentwidth){
//     //     $scope.movemenu = false

//     // }
// })

// $scope.container.addEventListener("mouseup", (e) =>{
    
//     if($scope.movemenu){

//         $scope.movemenu = false
//     }
// })



    

})