import {div, a, img, i} from "docrel"

  function loadNavBar() {

    console.log('hey')

    let header = document.querySelector('.header')

    const navBar = div({class: 'navbar-wagon'},[
      a({href: 'index.html', class: 'navbar-wagon-brand'},[
        img({src: 'images/Michael.jpg', alt: 'logo' class: 'avatar'}),
      ]),
      div({class: 'navbar-wagon-right hidden-xs hidden-sm'},[
        a({href: 'https://github.com/michaelgregory1', target: '_blank'>},[
          i({class: 'fab fa-github navbar-wagon-item'}),
        ]),
        a({href: 'https://www.linkedin.com/in/michael-gregory1/', target: '_blank'>},[
          i({class: 'fab fa-linkedin navbar-wagon-item'}),
        ]),
        a({href: 'about.html', class: 'navbar-wagon-item navbar-wagon-link', innerText: 'About'}),
        a({href: 'portfolio.html', class: 'navbar-wagon-item navbar-wagon-link', innerText: 'Portfolio'}),
        a({href: 'contact.html', class: 'navbar-wagon-item navbar-wagon-link', innerText: 'Contact'})
      ])
    ])

    header.appendChild(navBar)

  }
