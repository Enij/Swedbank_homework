export class TabPanel extends HTMLElement {
    static observedAttributes = ["selected-index"];
    #selectedIndex = 0;
    constructor() {
        super();
        this.bind(this);
    }
    bind(element) {
        element.render = element.render.bind(element);
        element.attachEvents = element.attachEvents.bind(element);
        element.cacheDom = element.cacheDom.bind(element);
        element.onTabClick = element.onTabClick.bind(element);
        element.selectTabByIndex = element.selectTabByIndex.bind(element);
        element.onContentSlotChange = element.onContentSlotChange.bind(element);
        element.onTabSlotChange = element.onTabSlotChange.bind(element);
    }
    connectedCallback() {
        this.render();
        this.cacheDom();
        this.attachEvents();
        this.dom.tabs[this.#selectedIndex]?.classList.add("selected");
        this.dom.contents[this.#selectedIndex]?.classList.add("selected");
    }
    render() {
        this.shadow = this.attachShadow({ mode: "open" });
        this.shadow.innerHTML = `
                <style>
                    .tabs {
                        display: flex;
                        flex-direction: row;
                    }

                    .tab-contents ::slotted(*) {
                        display: none;
                    }
                    .tab-contents ::slotted(.selected) {
                        display: block;
                        padding: 5px;
                    }
                </style>
                <div class="tabs">
                    <slot id="tab-slot" name="tab"></slot>
                </div>
                <div class="tab-contents">
                    <slot id="content-slot" name="content"></slot>
                </div>
            `;
    }
    cacheDom() {
        this.dom = {
            tabSlot: this.shadow.querySelector("#tab-slot"),
            contentSlot: this.shadow.querySelector("#content-slot")
        };
        this.dom.tabs = this.dom.tabSlot.assignedElements();
        this.dom.contents = this.dom.contentSlot.assignedElements();
    }
    attachEvents() {
        this.dom.tabSlot.addEventListener("click", this.onTabClick);
        this.dom.tabSlot.addEventListener("slotchange", this.onTabSlotChange);
        this.dom.contentSlot.addEventListener("slotchange", this.onContentSlotChange);
    }
    onTabSlotChange(){
        this.dom.tabs = this.dom.tabSlot.assignedElements();
    }
    onContentSlotChange(){
        this.dom.contents = this.dom.contentSlot.assignedElements();
    }
    onTabClick(e) {
        const target = e.target;
        if (target.slot === "tab") {
            const tabIndex = this.dom.tabs.indexOf(target);
            this.selectTabByIndex(tabIndex);
        }
    }
    selectTabByIndex(index) {
        const tab = this.dom.tabs[index];
        const content = this.dom.contents[index];
        if (!tab || !content) return;
        this.dom.contents.forEach(p => p.classList.remove("selected"));
        this.dom.tabs.forEach(p => p.classList.remove("selected"));
        content.classList.add("selected");
        tab.classList.add("selected");
    }
}

customElements.define("swed-tab-panel", TabPanel);