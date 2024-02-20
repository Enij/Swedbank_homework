export class Calculator extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.innerHTML = `
            <style>
                swed-calculator {
                    border-radius: 3px;
                    display: block;
                    width: 100%;
                    height: 100%;
                    background-color: var(--bg-white);

                    select {
                        background-color: var(--brand-turquoise-lighter);
                    }

                    input, select {
                        border: 1px solid var(--custom-turquoise);
                        border-radius: 3px;
                        padding: 13px 10px;
                    }

                    form {
                        .input-wrapper {
                            padding: 2rem 0;

                            label {
                                color: var(--custom-brown);
                                font-size: 15px;
                            }

                            select {
                                color: var(--custom-brownish);
                                font-size: 15px;
                            }
                        }

                        > section {
                            display: flex;
                            padding: 1rem;

                            .wrapper {
                                .output-wrapper {
                                    border-bottom: 1px solid var(--bg-brown);
                                    display: flex;
                                    justify-content: space-between;
                                    align-items: baseline;

                                    span {
                                        color: var(--custom-brown);
                                        font-size: 15px;
                                        cursor: default;
                                        background: var(--bg-white);
                                        padding: 5px 0;

                                        &:hover {
                                            background: var(--bg-white);
                                        }

                                        &:first-child {
                                            padding-left: 10px;
                                        }

                                        &:last-child {
                                            display: flex;
                                            align-items: baseline;
                                            gap: 0.25rem;

                                            p:first-child {
                                                color: var(--brand-orange);
                                                font-size: 30px;
                                            }
                                        }
                                    }
                                }
                            }

                            > div > div {
                                display: flex;
                                margin: 0.75rem 0;
                                align-items: center;

                                select {
                                    -webkit-appearance: none;
                                    background-size: 18px 18px;
                                    background-position: right center;
                                    background-origin: content-box;
                                    background-repeat: no-repeat;
                                    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 28 28' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath id='dropdown.-traingle' d='m8.7174 15.485h10.804l-5.4022 9.6601z' stroke-width='1.5764'/%3E%3Cpath d='m19.632 11.771h-10.804l5.4022-9.6601z' stroke-width='1.5764'/%3E%3C/svg%3E");
                                }

                                .custom-width {
                                    display: flex;
                                    gap: 0.75rem;

                                    > input {
                                        width: 100%;
                                    }

                                    > input + select {
                                        width: 200px;
                                    }
                                }
                            }
                    
                            .calculator-actions {
                                display: flex;
                                justify-content: flex-end;
                                gap: 1rem;
                                padding-top: 0.5rem;
                            }
                        }
                    }
                }
            </style>
            <form onsubmit="validateForm()">
                <section>
                    <div class="input-wrapper">
                        <div>
                            <label for="loanSize">Loan size</label>
                            <input type="range" id="loanSize" name="loanSize" min="32000" max="320000"/>
                        </div>

                        <div>
                            <label for="period">Period</label>

                            <select name="period" id="period" class="custom-width">
                                <option value="30" disabled selected>30 years</option>
                                <option value="10">10 years</option>
                                <option value="20">20 years</option>
                                <option value="30">30 years</option>
                                <option value="40">40 years</option>
                                <option value="50">50 years</option>
                            </select>
                        </div>
                        <div>
                            <label for="interest">Interest</label>

                            <select name="interest" id="interest" class="custom-width">
                                <option value="4.5" disabled selected>4.5 %</option>
                                <option value="1.5">1.5 %</option>
                                <option value="2.5">2.5 %</option>
                                <option value="3.5">3.5 %</option>
                                <option value="4.5">4.5 %</option>
                                <option value="5.5">5.5 %</option>
                            </select>
                        </div>
                    </div>
                    <div class="wrapper">
                        <div class="output-wrapper">
                            <span>Monthly payment</span>
                            <span>
                                <p>573.6<p>EUR
                            </span>
                        </div>
                        <div class="calculator-actions">
                            <button class="primary">Apply</button>
                        </div>
                    </div>
                    
                </section>
            </form>
        `;
      }
}

customElements.define("swed-calculator", Calculator)