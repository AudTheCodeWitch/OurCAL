export function changeColor(button, color) {
  let data = { button: button, color: color };
  return { type: "CHANGE_COLOR", data };
}
