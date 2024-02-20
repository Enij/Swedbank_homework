export class Header extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.innerHTML = `
          <style>
            header {
                position: relative;
                z-index: 3;
            }
            .gradient-bar {
              height: 10px;
              background: linear-gradient(to right, var(--brand-orange), var(--primary-yellow));
            }
            .gradient-bar + div > img {
                margin: 15px;
            }
          </style>
          <header>
            <div class="gradient-bar"></div>
            <div>
                <img alt="Swedbank logo" src="components/assets/swedbank_logo.png"></img>
            </div>
            <swed-menu></swed-menu>
          </header>
        `;
      }
}

customElements.define("swed-header", Header)