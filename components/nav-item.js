export class NavItem extends HTMLElement {
    constructor() {
        super()
    }
    connectedCallback() {
        this.innerHTML = `
            <style>
                a {
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                }

                swed-nav-item:hover {
                    background-color: var(--custom-pink);
                    border-top: 1px solid var(--brand-orange);
                
                    img {
                        filter: invert(46%) sepia(86%) saturate(637%) hue-rotate(342deg) brightness(95%) contrast(95%);
                    }
                
                    span {
                        color: var(--brand-orange);
                    }
                }
            </style>
            <li>
                <a class="default">
                    <img alt="${this.getAttribute('label')}" src="components/assets/${this.getAttribute('icon')}.svg"></img>
                    <span>${this.getAttribute('label')}</span>
                </a>
            </li>
        `;
      }
}

customElements.define("swed-nav-item", NavItem)