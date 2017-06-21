;(global => {
  const spans = document.querySelectorAll('.brunch span')
  Array.prototype.forEach.call(spans, span => {
    if (span.style.fontFamily !== 'Helvetica') {
      return
    }

    span.style.fontFamily = 'monospace'
    span.style.color = 'white';
    span.style.padding = '.2rem .6rem'
    span.style.margin = '0 .4rem'
  })
})(this);