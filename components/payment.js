export class Payment extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
            <style>
                swed-payment {
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
                            label {
                                color: var(--custom-brown);
                                font-size: 15px;
                            }

                            select {
                                color: var(--custom-brownish);
                                font-size: 15px;
                            }
                        }

                        > section > div > div {
                            display: flex;
                            margin: 0.75rem 0;

                            label {
                                margin-right: 0.75rem;
                            }

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
                            }
                        }

                        .payment-actions {
                            display: flex;
                            justify-content: flex-end;
                            padding: 1rem 
                        }
                    }
                }
            </style>
            <form onsubmit="validateForm()">
                <section>
                    <div class="input-wrapper">
                        <div>
                            <label for="account">Account</label>

                            <select required name="account" id="account" class="custom-width">
                                <option value="account1" selected>Account name 1</option>
                                <option value="account2">Account name 2</option>
                                <option value="account3">Account name 3</option>
                                <option value="account4">Account name 4</option>
                                <option value="account5">Account name 5</option>
                            </select>
                        </div>

                        <div>
                            <label for="savedPayments">Saved payments</label>

                            <select required name="savedPayments" id="savedPayments" class="custom-width">
                                <option value="" disabled selected>Select a saved payment</option>
                                <option value="savedPayments1">Saved payment 1</option>
                                <option value="savedPayments2">Saved payment 2</option>
                                <option value="savedPayments3">Saved payment 3</option>
                                <option value="savedPayments4">Saved payment 4</option>
                                <option value="savedPayments5">Saved payment 5</option>
                            </select>
                        </div>
                        <div>
                            <label for="amount">Amount</label>
                            <div class="custom-width">
                                <input required pattern="[0-9]" name="amount" id="amount">

                                <select name="amountCurrency" id="amountCurrency">
                                    <option value="EUR" selected>EUR</option>
                                    <option value="USD">USD</option>
                                    <option value="JPY">JPY</option>
                                    <option value="GBP">GBP</option>
                                    <option value="CNY">CNY</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label for="description">Description</label>
                            <div class="custom-width">
                                <input required name="description" id="description">
                            </div>
                        
                        </div>
                    </div>
                    <div class="payment-actions">
                        <button class="secondary">Save</button>
                        <button class="primary">Pay</button>
                    </div>
                </section>
            </form>
        `;
      }
}

customElements.define("swed-payment", Payment);