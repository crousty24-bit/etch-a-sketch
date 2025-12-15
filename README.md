# etch-a-sketch

odin project: etch-a-sketch





* **Make a square grid 16x16** **✅**
* **Make mouseover function working✅**
* **Add randomColor function working ✅**
* **Limit to 100x100 is set for inputUser ✅**
* **Button is at the top of the page ✅**
* **Encountered one issue where squares didnt fit into the grid (container), they went "over" the grid at the Bottom :**

 	- this was due to border set in style.css for .container and .square

 	- removing those borders fixed issue

 	- i used primarly to help me see if the square were correctly placed (with flexbox and the createGrid function in JS)

 	- kinda looks better without them anyway ?



*Update 15/12/25*

* <b>Fix previous issue</b> **✅ :** 

	**-** so this issue was Indeed related to Flexbox AND how it was calculed in JS :

&nbsp;	setting borders in css but defining my squareSize with 'pixels' was whats causing the issue.

&nbsp;	- Added borders back to .countainer and .square as intended

&nbsp;	- Then removed *divContainer.clientWidth / n;* cause we dont want to use pixels
	- Added **.flexBasis** instead to our square in order to define our width with Flexbox

&nbsp;	- Same goes for our height

&nbsp;	- Now fixed for all values (up to 100x100)



This issue was a blessing actualy, it made revisit and go further on with Flexbox. 
I'll remember this gotcha now : if you use Flexbox to handle your layout, let Flexbox manage sizing, not pixels.



* **Add new border color to improve grid visibily ✅**



