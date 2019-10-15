import { LitElement, html } from 'lit-element/lit-element.js'

// Extend the LitElement base class
class MyOne extends LitElement {
  render () {
    return html`
      <p>One</p>
    `
  }
}
// Register the new element with the browser.
customElements.define('my-one', MyOne)
