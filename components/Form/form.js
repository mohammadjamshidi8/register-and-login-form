let template = document.createElement('template')
template.innerHTML = `

`



class Form extends HTMLElement {

    constructor() {
        super()

        this.attachShadow({ mode: 'open' })

        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }


}



export { Form }