function takeANumber(line, name) {
  if (typeof line === 'undefined') {
    line = [name];
  } else {
    line.push(name);
  }
}
