export function colorPixel(id, pen, color) {
  const payload = {
    id: id,
    pen: pen,
    color: color
  };
  return { type: "COLOR_PIXEL", payload };
}
