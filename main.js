var allTags = document.getElementsByTagName('a');

document.addEventListener("keydown", function(event) {
  if (event.which == 70) {
    for (var i = 0; i < allTags.length; i++) {
      var newAtt = allTags[i];
      var shortCut = document.createElement('div');
      var span1 = document.createElement('span');
      var span2 = document.createElement('span');
      span1.textContent = "A";
      span2.textContent = i;
      shortCut.appendChild(span1);
      shortCut.appendChild(span2);
      newAtt.insertAdjacentElement('afterend', shortCut);
      document.addEventListener("keydown", function(event) {
        if (event.which == 71) {
          console.log("in 2nd event");
          allTags[1].click();
        }
      })
    }
  }
})
