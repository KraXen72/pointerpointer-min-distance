# pointerpointer but fast

this is [pointerpointer.com](https://pointerpointer.com) but instant.  
![pp](https://cdn.discordapp.com/attachments/704792091955429426/975436266411810837/unknown.png)  

instead of using Voronoi diagram to divide the canvas into cells and then match the cell (really cool but not that fast, i tried it before and this is faster),   
i simply compute the distance between the mouse and every one of the 710 points, get the minimum value (closest point) and display that image.  

the `positions.js` is just `positions.json` from pointerpointer.com but edited so its `const positions = [...]`  
you can get the pics from pointerpointer directly with the python script. these pics aren't mine ok.
  
i could put this on github pages but it's really not a good idea. just clone the repo and open `index.html`

