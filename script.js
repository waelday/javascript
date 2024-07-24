/**
    * @description      : 
    * @author           : waeld
    * @group            : 
    * @created          : 24/07/2024 - 12:38:38
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 24/07/2024
    * - Author          : waeld
    * - Modification    : 
**/
// ---------------------------------------
// parameters in methods and constructor
// ---------------------------------------

class App{
    constructor(text,img){
       let content = document.getElementById("content");
       content.innerHTML = "<img src='" + img + "' />   <h1>" + text + "</h1>" ;
    }
  
}

onload = new App("Coder Shiyar","logo-icon.png");