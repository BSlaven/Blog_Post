export const parseHtmlContent = block => {
  
}

export const parseClasses = inlineStyles => {
  const classes = [];
  inlineStyles.forEach(item => {
    switch(item) {
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
  return classes.join(' ');
}