export class Footer extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = "custom footer"
    }

    connectedCallback() {
        this.innerHTML = `
          <style>
            footer {
                background-color: var(--bg-brown);
            }
            .gradient-bar {
              height: 5px;
              background: linear-gradient(to right, var(--brand-orange), var(--primary-yellow));
            }
            .disclaimer {
                text-align: center;
                justify-content: center;
                padding: 2rem;
                font-size: 13px;
                background-color: var(--bg-white);

                p {
                    max-width: 1050px;
                    text-align: center;
                    margin: 0 auto;
                    color: var(--custom-brown);
                }
            }
            .footer-lists {
                display: flex;
                max-width: 1550px;
                margin: 0 auto 1rem auto;
                justify-content: space-between;
            
                a {
                    color: var(--custom-mahogany);
                }

                ul > li:first-of-type {
                    margin: 0.75rem 0;
                    font-size: 18px;
                    color: var(--custom-mahogany);
                }

                ul > li:not(first-of-type) {
                    margin: 0.55rem 0;
                }

                .h1-like {
                    color: var(--brand-orange);
                    font-size: 32px;
                    font-weight: 700;
                }

                .icons img {
                    padding-right: 5px;
                    margin-top: 0.5rem;
                }

                .flex-column {
                    display: flex;
                    flex-direction: column;
                }
            }

            a:not(.default) {
                display: inline-block;
                text-decoration: none;

                &:before{
                    content: "";
                    display: inline-block;
                    width: 0;
                    height: 0;
                    border-top: 6px solid transparent;
                    border-bottom: 6px solid transparent;
                    border-left: 7px solid var(--custom-mahogany);
                    margin-right: 7px;
                }
            }

            .mail-link > a {
                color: var(--custom-teal);
                align-items: flex-start;
                align-content: flex-start;
                margin-bottom: 1rem;
            }
          </style>
          <footer>
            <div class="gradient-bar"></div>
            <div class="footer-lists">
                <ul>
                    <li>
                        Contact
                    </li>
                    <li class="h1-like">
                        6 310 310
                    </li>
                    <li class="mail-link">
                        <a class="default" href="mailto:info@swedbank.ee">info@swedbank.ee</a>
                    </li>
                    <li class="flex-column">
                        <span>SWEDBANK AS</span>
                        <span>Liivalaia 8, 15040 Tallinn</span>
                        <span>SWIFT kood/BIC: HABAEE2X</span>
                        <span>Reg. number: 10060701</span>
                    </li>
                    <li class="icons">
                        <img alt="facebook icon" src="components/assets/social-media-icons/facebook.svg"></img>
                        <img alt="instagram icon" src="components/assets/social-media-icons/instagram.svg"></img>
                        <img alt="youtube icon" src="components/assets/social-media-icons/youtube.svg"></img>
                        <img alt="twitter icon" src="components/assets/social-media-icons/twitter.svg"></img>
                        <img alt="skype icon" src="components/assets/social-media-icons/skype.svg"></img>
                    </li>
                </ul>
                <ul>
                    <li>
                        Quicklinks
                    </li>
                    <li>
                        <a href>Calculators</a>
                    </li>
                    <li>
                        <a href>Prices</a>
                    </li>
                    <li>
                        <a href>Terms of service</a>
                    </li>
                    <li>
                        <a href>Privacy and security</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        Join Swedbank
                    </li>
                    <li>
                        <a href>Client programs</a>
                    </li>
                    <li>
                        <a href>Business customers</a>
                    </li>
                    <li>
                        <a href>Jobs</a>
                    </li>
                    <li>
                        <a href>Internships</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        Services
                    </li>
                    <li>
                        <a href>Everyday banking</a>
                    </li>
                    <li>
                        <a href>Loans</a>
                    </li>
                    <li>
                        <a href>Insurance</a>
                    </li>
                    <li>
                        <a href>Cards</a>
                    </li>
                    <li>
                        <a href>Stocks</a>
                    </li>
                </ul>
            </div>
            <div class="disclaimer">
                <p>
                    This is a website of companies offering financial services – Swedbank AS, Swedbank Liising AS, Swedbank P&C Insurance AS, Swedbank Life Insurance SE, and Swedbank Investeerimisfondid AS.
                    Before entering into any agreement read the terms and conditions of the respective service. Consult a specialist, where necessary.
                    Swedbank AS does not provide a credit advisory service for the purposes of the Creditors and Credit Intermediaries Act.
                    The borrower makes the decision of taking out a loan, who assesses the suitability of the loan product and contractual terms to his/her personal loan interest,
                    need and financial situation on the basis of the information and warnings presented by the bank and is responsible for the consequences related to concluding the agreement.
                </p>
            </div>
          </header>
        `;
      }
}

customElements.define("swed-footer", Footer)