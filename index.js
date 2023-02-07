class SiteHeader extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <h1 id="title"><a href="/index.html">homeless pals</a></h1>
      <nav class="round-border font-4 scroll">
      <a href="/help/index.html">GET HELP</a>
      &nbsp;&#x27E1;&nbsp;
      <a href="#footer">CONTACT</a>
      &nbsp;&#x27E1;&nbsp;
      <a href="/index.html#zines">ZINES</a>      
      &nbsp;&#x27E1;&nbsp;
    <a href="/archive">ARCHIVE</a>
      </nav>
      `;
    }
  }
      
  customElements.define('site-header', SiteHeader);


  class SiteFooter extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `<footer class="round-border text-center" id="footer">
      <u class="font-4 ">&#x27E1;&nbsp;CONTACT&nbsp;&#x27E1</u><br>
  
      <p>email: <a href="mailto:homelesspals@protonmail.com">homelesspals@protonmail.com</a></p>
      <p>instagram: <a href="https://instagram.com/homelesspals">homelesspals</a></p>
  
  </footer>`;
    }
  }
      
  customElements.define('site-footer', SiteFooter);