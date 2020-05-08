function takeANumber(line, name) {
  if (line.length === 0) {
    line = [name];
    return `Congrats, ${name}, you are number 1 in the line!`;
  } else {
    line.push(name);
    return `Hello, ${name}, you are number ${line.length} in the line.`;
  }
}
