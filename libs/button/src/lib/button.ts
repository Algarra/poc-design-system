import { LitElement, html, css } from 'lit';
import { render } from '@lit-labs/ssr';
import { customElement, property } from 'lit/decorators.js';

@customElement('my-button')
export class MyButton extends LitElement {
  @property({ type: String }) type: 'primary' | 'secondary' = 'primary';

  static override styles = css`
    .dh-button {
      border: var(--dh-button-border, none);
      padding: var(--dh-button-padding, 0.5rem 1rem);
      font-size: var(--dh-button-font-size, 1rem);
      cursor: var(--dh-button-cursor, pointer);
      border-radius: var(
        --dh-button-border-radious,
        var(--dh-button-, 0.375rem)
      );
      transition: background-color 0.3s ease, color 0.3s ease;
    }
    .dh-button.primary {
      background-color: var(
        --dh-button-bg,
        var(--l4-content-primary-btn-bg, #ffcc00)
      );
      color: var(
        --dh-button-color,
        var(--l4-content-primary-btn-color, #5b0000)
      );
    }
    .dh-button.secondary {
      background-color: var(
        --dh-button-bg,
        var(--l4-content-secondary-btn-bg, #c62727)
      );
      color: var(
        --dh-button-color,
        var(--l4-content-secondary-btn-color, #ff9999)
      );
    }
    .dh-button:hover {
      opacity: 80%;
    }
  `;

  override render() {
    return html`
      <button class="dh-button ${this.type}" @click="${this.handleClick}">
        <slot></slot>
      </button>
    `;
  }

  private handleClick() {
    this.dispatchEvent(
      new CustomEvent('dh-button-click', { detail: 'Button clicked' })
    );
  }
}

export const myButtonSSR = (props: { type: 'primary' | 'secondary' }) =>
  render(html`<my-button type="${props.type}"></my-button>`);
