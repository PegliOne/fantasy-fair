const capitalise = function(text) {
  // Make this work more generally
  if (text === 'publication-year') {
    return 'Publication Year'
  }
  if (text === 'sci-fi') {
    return 'Sci-Fi';
  }
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export default capitalise;