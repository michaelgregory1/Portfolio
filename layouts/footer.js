import {div, a, img, i} from "docrel"

  function loadFooter() {

    console.log('hey')

    let footer = document.querySelector('.footer-wrap')

    const footerContent = div({class: 'footer'},[
      div({class: 'footer-links'},[
        a({href: 'https://github.com/michaelgregory1', target: '_blank'},[
          i({class: 'fab fa-github foothub'}),
        ]),
        a({href: 'https://www.linkedin.com/in/michael-gregory1/', target: '_blank'},[
          i({class: 'fab fa-linkedin'}),
        ]),
      ]),
      div({class: 'footer-copywright', innerText: 'Coded By Michael Gregory'}),
    ])

    footer.appendChild(footerContent)
    console.log('footer')
  }
