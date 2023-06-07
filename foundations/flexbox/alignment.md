# Alignment

justify-content -> container attribute

space-between : equally balanced across main axis

center : together at center

right, left -> don't use that!
-> flex-start, flex-end


placement along the cross axis -> align-items attribute

same values : center, flex-start, flex-end
but no space-...
instead : stretch, baseline

align-items: stretch -> mega cool!!

align-self -> item attribute 
same values as align-items, but for one item

css: not a collection of properties

css: a collection of layout modes

width in Flow layout (default mode) : an absolute value
width in flex mode : a hypothetical value

min-width : an item side alternative to shrink = 0

min-width: 0px; -> the item can shrink as much as necessary
-> we override the default min width (varies depending on html tag)

auto margin is insane when used item side in flex !
applied to one item only, it handles the extra space

## Gap

on flex container
it's a quite new feature

gap: 8px;

## Flex-wrap

c'est mega cool
permet de faire des disposition differentes sur format paysage ou portait (notament)

align-content: cross axis, used to align the content (wrapped) relative to the flex container