export const parseClasses = inlineStyles => {
  const classes = [];
  inlineStyles.forEach(item => {
    switch(item.style) {
      case 'BOLD':
        classes.push('bold');
        break;
      case 'ITALIC':
        classes.push('italic');
        break;
      default:
        classes.push('underline');
    }
  })
  const textClasses = classes.join(' ');
  return textClasses;
}