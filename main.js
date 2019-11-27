var allTags = document.getElementsByTagName('a');

document.addEventListener("keydown", function(event) {
  if (event.which == 70) {
    var displayArray = [];
    var keyStrokes = [];
    for (var i = 0; i < allTags.length; i++) {
      var newAtt = allTags[i];
      var tagText = newAtt.textContent;
      var shortCut = document.createElement('div');
      var span2 = document.createElement('span');

      span2.textContent = tagText.slice(0,1) + i;
      // span2.onclick(newAtt.click());
      span2.onclick = () => newAtt.click();
      // span2.onclick = () => console.log("whoooo");

      // function clickIt(newAtt) {
      //   newAtt.click();
      // }
      // span2.onclick = clickIt;
      shortCut.appendChild(span2);
      newAtt.insertAdjacentElement('afterend', shortCut);
      displayArray.push(span2.textContent);
    }
    document.addEventListener("keydown", function(e) {
      var letter = e.keyCode;
      // console.log(displayArray);
      keyStrokes.push(String.fromCharCode(letter));
      console.log(keyStrokes);
      // var list = displayArray.filter(num => num.startsWith(e) );
    })
  }
})



