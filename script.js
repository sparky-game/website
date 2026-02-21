// Copyright (C) Wasym A. Alonso. All Rights Reserved.

class SKLink extends HTMLElement {
  connectedCallback() {
    const href = this.getAttribute("href") || "#";
    const content = this.innerHTML;
    this.outerHTML = `<p>=> <a href="${href}">${content}</a></p>`;
  }
}
customElements.define("sk-link", SKLink);
