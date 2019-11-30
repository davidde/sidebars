# Responsive sidebars
This project is somewhat of a research experiment
into the most convenient way of implementing responsive sidebars.

## Priorities
* Simple design, easy to understand.
* Responsive design:
    - In landscape mode the sidebars should push the main content aside.
    - In portrait mode they should cover the main content.
* The sidebar trigger should **not** move when clicked;
  this is annoying to the user.
* The sidebar should be 'ready' when it slides into view,
  and not rearrange its content while opening.  
  (this is visually distracting, but a very common implementation:
  e.g. sidebars with `width: 0` when closed).

## Design
The code is deliberately kept minimal to not distract from the
sidebar mechanics;  
it makes use of flexbox, but there are other branches
exploring CSS grid and absolute positioning.

3 flex items are used for their adaptive features:
the sidebars `#left` and `#right`, and the main content `#main`.  
This allows pushing the main content aside when the landscape sidebars
open. However, since we want the sidebar to not rearrange its content
while opening, the actual sidebars are not these flex items,
but a child div with a fixed width.

As a result, the sidebars make use of 2 separate transitions:
- One for the (landscape) `width`, so the main content adapts
  to the opened sidebars taking in space.
- One for the `transform: translateX` which slides the
  (portrait and landscape) sidebars in and out of view.