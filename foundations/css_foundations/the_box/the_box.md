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