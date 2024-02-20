export class About extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = "custom about"
    }
    connectedCallback() {
        this.innerHTML = `
            <style>
                swed-about section {
                    border-radius: 3px;
                    margin-top: 0.75rem;
                    background-color: var(--bg-white);
                    padding: 1rem;
                }

                .about {
                    display: flex;
                    background-color: var(--brand-turquoise-lighter);

                    .circle {
                        background: var(--primary-yellow);
                        border-radius: 50%;
                        width: 175px;
                        height: 175px;
                        color: #fff;
                        text-align: center;
                        line-height: 175px;
                        min-width: 175px;

                        span {
                            font-size: 1.25rem;
                            font-weight: 800;
                        }
                    }

                    .info {
                        color: var(--custom-brownish);

                        h2 {
                            padding-bottom: 0.5rem
                        }

                        .actions {
                            padding: 2rem 0 2rem 0;
                            display: flex;
                            justify-content: space-between;

                            a:not(.nav) {
                                display: inline-block;
                                text-decoration: none;
                                color: var(--custom-teal);
                
                                &:before{
                                    content: "";
                                    display: inline-block;
                                    width: 0;
                                    height: 0;
                                    border-top: 6px solid transparent;
                                    border-bottom: 6px solid transparent;
                                    border-left: 7px solid var(--custom-teal);
                                    margin-right: 7px;
                                }
                            }
                        }
                    }
                }
            </style>
            <section>
                <div class="about">
                    <div class="circle">
                        <span>Hello world!</span>
                    </div>
                    <div class="info">
                        <h2>Welcome to Swedbank!</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Mattis nunc sed blandit libero volutpat sed cras ornare arcu.
                            Mauris sit amet massa vitae. Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper.
                            Ipsum dolor sit amet consectetur adipiscing elit.
                            Amet risus nullam eget felis eget nunc lobortis mattis aliquam.
                        </p>
                        <div class="actions">
                            <a href>Read more</a>
                            <button class="primary">Go</button>
                        </div>
                    </div>
                </div>
            </section>
        `;
      }
}

customElements.define("swed-about", About)