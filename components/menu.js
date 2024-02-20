export class Menu extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.innerHTML = `
          <style>
            nav {
                width: 100%;
                background: var(--bg-white);;

                ul {
                    display: flex;
                    height: 100%;
                    cursor: pointer;

                    swed-nav-item {
                        border-top: 1px solid var(--bg-brown);
                        display: flex;
                        height: 55px;
                        align-items: center;

                        img {
                            margin-bottom: 0.25rem;
                        }

                        &:not(:first-child) {
                            border-left: 1px solid var(--bg-brown);
                        }
                    }
                }

                
            }
          </style>
        <nav>
            <ul>
                <swed-nav-item icon="home" label="Home"></swed-nav-item>
                <swed-nav-item icon="wallet" label="Everyday banking"></swed-nav-item>
            </ul>
        </nav>
        `;
      }
}

customElements.define("swed-menu", Menu)