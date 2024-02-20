export class Overview extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = "custom overview"
    }
}

customElements.define("swed-overview", Overview)