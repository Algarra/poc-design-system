import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('my-button')
export class MyButton extends LitElement {
  @property({ type: String }) label = 'Click Me';

  static override styles = css`
    :host {
      display: inline-block;
      font-family: sans-serif;
    }
    button {
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
      border: none;
      border-radius: 4px;
    }
    button:hover {
      background-color: #007bff;
      color: white;
    }
  `;

  override render() {
    return html`<button @click="${this.handleClick}">${this.label}</button>`;
  }

  private handleClick() {
    this.dispatchEvent(new CustomEvent('button-click', { detail: this.label }));
  }
}
