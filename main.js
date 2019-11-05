var allTags = document.getElementsByTagName('a');

document.addEventListener("keydown", function(event) {
  // console.log(event.which);
  if (event.which == 70) {
    // console.log("you typed f");
    for (var i = 0; i < allTags.length; i++) {
      var newAtt = allTags[i];
      var tagText = newAtt.textContent;
      var shortCut = document.createElement('h3');
      shortCut.textContent = tagText;
      newAtt.appendChild(shortCut);
    }
  }
})


// for (var i = 0; i < allTags.length; i++) {
//   allTags[i].addEventListener('click', function() {
//     var newAtt = this;
//     var tagText = this.textContent;
//     var shortCut = document.createElement('h3');
//     shortCut.textContent = tagText;
//     newAtt.appendChild(shortCut);
//   })
// }

/* 
var allImages = document.getElementsByTagName('img');
var myElementsToDisappear = document.getElementsByTagName('p');

for (var i = 0; i < allImages.length; i++) {
  allImages[i].addEventListener('click', function() {
    var thisImageHeight = this.clientHeight;
    var thisImageWidth = this.clientWidth;
    var imageLink = "https://placebear.com/" + thisImageWidth + "/" + thisImageHeight;
    this.setAttribute('src', imageLink);
    // console.log(imageLink);
  });
};

for (var j = 0; j < myElementsToDisappear.length; j++) {
  console.log(myElementsToDisappear[j]);
  myElementsToDisappear[j].addEventListener('click', function() {
    this.setAttribute('style', 'visibility: hidden')
  });
}

// document.body.style = "transition: 3s; transform: rotate(10deg); font-size: 40px";

*/