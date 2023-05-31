const capitalise = function(text) {
  let capitalisedText = capitaliseWithSplit(text, '-');
  capitalisedText = capitaliseWithSplit(capitalisedText, ' ');
  return capitalisedText;
}

const capitaliseWithSplit = function(text, splitter) {
  text = text.split(splitter);
  text = text.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
  return text.join(splitter);
}

export default capitalise;
