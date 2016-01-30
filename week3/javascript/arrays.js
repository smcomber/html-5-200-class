//create array
var colorList = ["Red","Black","White","Blue","Green","Yellow","Chartreuse","Brown"];

//alternative method - manually add index positions
//variables IN functions (function scope) can see global variables
  var imageList = new Array();
  imageList[0] = "images/drawing/thumbs/artwork_1.jpg";
  imageList[1] = "images/drawing/thumbs/artwork_2.jpg";
  imageList[2] = "images/drawing/thumbs/artwork_3.jpg";
  imageList[3] = "images/drawing/thumbs/artwork_4.jpg";
  imageList[4] = "images/drawing/thumbs/artwork_5.jpg";
  imageList[5] = "images/drawing/thumbs/artwork_6.jpg";
  imageList[6] = "images/drawing/thumbs/artwork_6.jpg";
  imageList[7] = "images/drawing/thumbs/artwork_6.jpg";
  imageList[8] = "images/drawing/thumbs/artwork_6.jpg";
  imageList[9] = "images/drawing/thumbs/artwork_6.jpg";
  imageList[10] = "images/drawing/thumbs/artwork_6.jpg";
  imageList[11] = "images/drawing/thumbs/artwork_6.jpg";

//create the buildThumbnail function 
function buildThumbnails()
{
  //hook onto the thumbs div
  var thumbsDiv = document.getElementById("thumbs");
  
  //create an output variable
  var output = "";
  
  //first part: COUNTER (we set up zero to start counting the loop
  //second part: CONDITION (the loop will keep looping as long as the condition is true)
  //third part: INCREMENTER (adds one to the counter AFTER the code is executed in the brackets)
  for(var i=0; i < imageList.length; i++)
  {
    output += '<img src="' + imageList[i] + '"/>';//concatenation assignment
  }
  thumbsDiv.innerHTML = output;
  
  
  //innerHTML clears out all and replaces
  //concatenating - use single quotes to contain literal text/HTML
 /* thumbsDiv.innerHTML = 
    '<img src="' + imageList[0] + '"/>' + 
    '<img src="' + imageList[1] + '"/>' + 
    '<img src="' + imageList[2] + '"/>' +
    '<img src="' + imageList[3] + '"/>' +
    '<img src="' + imageList[4] + '"/>'; */
}//when  creating function, don't end with semicolon


//calling this so doesn't matter if .js file is caled on top or bottom of page
window.onload = function()
{
  buildThumbnails();//use or "fire off" this function - or invoke function
};