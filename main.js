var allTags = document.getElementsByTagName('a');

document.addEventListener("keydown", function(event) {
  if (event.which == 70) {
    var displayArray = [];
    var keyStrokes = [];
    for (var i = 0; i < allTags.length; i++) {
      var newAtt = allTags[i];
      // var tagText = newAtt.textContent;
      var shortCut = document.createElement('div');
      // var span1 = document.createElement('span');
      var span2 = document.createElement('span');

      // span1.textContent = "A";
      span2.textContent = i;
      // shortCut.appendChild(span1);
      shortCut.appendChild(span2);
      // newAtt.appendChild(shortCut);
      newAtt.insertAdjacentElement('afterend', shortCut);
      displayArray.push(span2.textContent);
    }
    document.addEventListener("keydown", function(e) {
      console.log("e" + e.which);
      console.log(displayArray);
      keyStrokes.push(e);
      var list = displayArray.filter(num => num.startsWith(e) );
      console.log(list);
    })
    // console.log(displayArray);
  }
})



