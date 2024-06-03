export default function cleanSet(set, startString) {
  if (!startString) return '';

  const strings = [];

  set.forEach((element) => {
    if (element.startsWith(startString)) {
      strings.push(element.slice(startString.length));
    }
  });

  return strings.join('-');
}
