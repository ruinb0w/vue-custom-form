export default function useDrag(list) {
  drag.list = list;
  return {
    dragStart,
    dragEnter,
    dragOver,
  };
}

const drag = {
  drag_index: -1,
  list: [],
};

function dragStart(index) {
  console.log("dragStart", index);
  drag.drag_index = index;
}

function dragEnter(e, index) {
  console.log("dragEnter", index);
  e.preventDefault();
  if (drag.drag_index !== index) {
    const source = drag.list[drag.drag_index];
    drag.list.splice(drag.drag_index, 1);
    drag.list.splice(index, 0, source);
    drag.drag_index = index;
  }
}

function dragOver(e) {
  e.preventDefault();
}
