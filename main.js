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

      span2.textContent = tagText.slice(0,1) + (i +10000);
      span2.setAttribute("id", span2.textContent)
      span2.onclick = () => {
        newAtt.click();
        }

      shortCut.appendChild(span2);
      newAtt.insertAdjacentElement('afterend', shortCut);

      displayArray.push(span2.textContent);
    }
    document.addEventListener("keydown", function(e) {
      let letter = e.keyCode;

      keyStrokes.push(String.fromCharCode(letter));
      console.log(keyStrokes);
      if (keyCount === 0) {
        list = displayArray.filter(key => key.startsWith(String.fromCharCode(letter)) );
      } else {
        // list = list.filter(key => key.includes(String.fromCharCode(letter)) );
        list = displayArray.filter(key => key.startsWith(keyStrokes.join("")) );

      }

      if (list.length <= 1) {

        const clickMe = document.documentElement.innerHTML
        console.log("clickMe", clickMe);
        // clickMe.click();
        const selection = document.querySelector('#'+list[0]);
        console.log("selection", selection);
        selection.click();
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



// windows.location.assign("http://url")