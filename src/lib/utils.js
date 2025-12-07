export function cn(...inputs) {
  const classes = [];
  for (const input of inputs) {
    if (typeof input === "string") {
      classes.push(input);
    } else if (Array.isArray(input)) {
      classes.push(cn(...input));
    } else if (input && typeof input === "object") {
      for (const key in input) {
        if (input[key]) {
          classes.push(key);
        }
      }
    }
  }
  return classes.filter(Boolean).join(" ");
}

