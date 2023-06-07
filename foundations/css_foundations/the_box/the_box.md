# The Box

Padding : inside the box, 4 sides

Border : inside the box, but most outter part, 4 sides

Margin : outside the box, 4 sides

content > padding > border > margin

content is defined with height and width


Margins don't add up, they collapse, the largest is used

height and width when we hover over the boxes with the mouse
-> content + padding + border
it's the default setting

else : box-sizing: border-box;
-> (content - padding - border) + padding + border


border-box is almost always used !!
it makes life so much easier
to put in universal selector (*)
or in html tag

## Borders

shorthand :
border: 5px solid red;
(border-width, border-style, border-color)

border-top-style: solid; (top, right, bottom, left)

border-color: red, blue, yellow, black;
(top right bottom left) == clockwise

border-radius: 5px;
to make rounded borders !!!

## Margin

margin: 50px;   (4 sides)
margin-top:
margin-right:
margin-bottom:
margin-left:

can be :
length (px, pt, cm)
auto (browser do the maths)
% (of the content's width)

top and bottom margins collapse,
right and left margins add up (why not)

## Block and inline boxes

block :
newline, h and w respected, container-width
inline :
no newline, no h and w, left and right applies, top and bottom don't
