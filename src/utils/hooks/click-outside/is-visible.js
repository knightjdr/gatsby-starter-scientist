// An element is considered visible if it has an opacity > 0
// and either a height or width.
const isVisible = (element) => {
  if (!element) {
    return false;
  }
  const rect = element.getBoundingClientRect();
  return Boolean(
    window.getComputedStyle(element).getPropertyValue('opacity') > 0
    && (
      rect.height
      || rect.width
    ),
  );
};

export default isVisible;
