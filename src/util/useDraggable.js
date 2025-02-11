import { ref } from 'vue';

export function useDraggable() {
  let isDragging = ref(false);
  let startX, startY, offsetX, offsetY;

  const startDrag = (e) => {
    isDragging.value = true;
    startX = e.clientX;
    startY = e.clientY;
    offsetX = e.target.offsetLeft;
    offsetY = e.target.offsetTop;

    const drag = (e) => {
      if (isDragging.value) {
        e.preventDefault();
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        e.target.style.left = offsetX + dx + 'px';
        e.target.style.top = offsetY + dy + 'px';
      }
    };

    const endDrag = () => {
      isDragging.value = false;
      document.removeEventListener('mousemove', drag);
      document.removeEventListener('mouseup', endDrag);
    };

    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', endDrag);
  };

  return {
    startDrag
  };
}
