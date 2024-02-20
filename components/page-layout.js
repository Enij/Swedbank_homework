export class PageLayout extends HTMLElement {
    constructor() {
        super()
    }
    connectedCallback() {
        this.innerHTML = `
            <style>
                swed-layout {
                    flex-grow: 1;

                    main {
                        display: block;
                        flex: 1 0 auto;
                        padding: 0.25rem 0 2rem 0;
                        background-color: var(--bg-orange);
                
                        h1 {
                            color: var(--brand-orange);
                            margin: 0.5rem;
                        }
                
                        .content {
                            width: 100%;
                            max-width: 1550px;
                            margin: 0 auto auto;
                            flex-shrink: 0;
                            flex: 1 0 auto;

                            &:before {
                                display: block;
                                content: "";
                                background-color: transparent;
                                will-change: background-color;
                                position: fixed;
                                top: 0;
                                left: 0;
                                right: 0;
                                bottom: 0;
                                pointer-events: none;
                                z-index: 2;
                            }

                            swed-tab-panel span {
                                cursor: pointer;
                                font-size: 18px;
                                color: var(--custom-mahogany);
                                padding: 10px 20px;
                                border-radius: 3px;
                                background-color: var(--bg-gray);

                                &.selected {
                                    background-color: var(--bg-white);
                                }

                                &:not(.selected):hover {
                                    background: var(--custom-peach);
                                }
                            }
                        }
        
                        a {
                            display: flex;
                            align-items: center;
                            flex-direction: column;
                        }
                    }
                }
            </style>
            <main>
                <div class="content">
                    <h1>Igapäevapangandus</h1>
                    <swed-tab-panel>
                        <span slot="tab">Payment</span>
                        <div slot="content">
                            <swed-payment></swed-payment>
                        </div>

                        <span slot="tab">Calculator</span>
                        <div slot="content">
                            <swed-calculator></swed-calculator>
                        </div>
                    </swed-tab-panel>
                    <swed-about></swed-about>
                </div>
            </main>
        `;
      }
}

customElements.define("swed-layout", PageLayout)