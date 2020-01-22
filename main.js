var allTags = document.getElementsByTagName('a');

document.addEventListener("keydown", function(event) {
  // Starts Extension with "f"
  if (event.which == 70) {
    var displayArray = [];
    var keyStrokes = [];
    let keyCount = 0;
    let list = [];

    // Constructs Spans and inserts them next to Anchor tags
    for (var i = 0; i < allTags.length; i++) {
      const newAtt = allTags[i];
      var tagText = newAtt.textContent;
      var shortCut = document.createElement('div');
      shortCut.classList.add("div-link");
      var span2 = document.createElement('span');

      // 10,000 added to make all tags unique
      span2.textContent = tagText.slice(0,1) + (i +10000);
      span2.setAttribute("id", span2.textContent);
      span2.classList.add("span-link");
      span2.onclick = () => {
        newAtt.click();
        }

      shortCut.appendChild(span2);
      newAtt.insertAdjacentElement('afterend', shortCut);

      displayArray.push(span2.textContent);
    }

    // Will narrow down and select a single span to click
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
        const selection = document.querySelector('#'+list[0]);
        console.log("selection", selection);
        selection.click();
      }

      keyCount += 1;
      console.log("list", list);
      console.log("keyCount", keyCount);
    })
  }
})
