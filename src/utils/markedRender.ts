import marked from 'marked'
import hljs from 'highlight.js'
export const markedRender = (body) => {
  const renderer = {
    image(href, title, text) {
      return `<a href="${href}" target="_blank" data-fancybox="group" class="fancybox">
           <img src="${href}" alt='${text}'>
          </a>`
    }
  }
  marked.setOptions({
    renderer: new marked.Renderer(),
    highlight: function (code) {
      return hljs.highlightAuto(code).value
    },
    pedantic: false,
    gfm: true,
    tables: true,
    breaks: true,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    xhtml: false
  })
  marked.use({ renderer })
  return marked(body)
}