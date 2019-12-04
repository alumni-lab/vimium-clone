var allTags = document.getElementsByTagName('a');

document.addEventListener("keydown", function(event) {
  if (event.which == 70) {
    var displayArray = [];
    var keyStrokes = [];
    let keyCount = 0;
    let list = [];

    for (var i = 0; i < allTags.length; i++) {
      const newAtt = allTags[i];
      var tagText = newAtt.textContent;
      var shortCut = document.createElement('div');
      var span2 = document.createElement('span');

      span2.textContent = tagText.slice(0,1) + i;
      // span2.onclick(newAtt.click());
      span2.onclick = () => {
        newAtt.click();
        // console.log(newAtt);
        }

      shortCut.appendChild(span2);
      newAtt.insertAdjacentElement('afterend', shortCut);
      // console.log(tagText);
      displayArray.push(span2.textContent);
    }
    document.addEventListener("keydown", function(e) {
      let letter = e.keyCode;
      // console.log(displayArray);
      keyStrokes.push(String.fromCharCode(letter));
      console.log(keyStrokes);
      if (keyCount === 0) {
        list = displayArray.filter(key => key.startsWith(String.fromCharCode(letter)) );
      } else {
        list = list.filter(key => key.includes(String.fromCharCode(letter)) );
      }

      // let list = displayArray.filter(function(key) {
      //   return key.slice(keyCount, (keyCount + 1));
      //   key.
      // });
      keyCount += 1;
      console.log("list", list);
      console.log("keyCount", keyCount);
    })
  }
})



