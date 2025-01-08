import { html } from 'lit';
import './button';

export default {
  title: 'MyButton',
  component: 'my-button',
};
export const Default = () => html`<my-button>ergewgt</my-button>`;

export const Seconday = () =>
  html`<my-button type="secondary">ergewgt</my-button>`;

export const CustomVariables = () =>
  html`
    <style>
      :root {
        --l4-content-secondary-btn-bg: #3227c6;
        --l4-content-secondary-btn-color: #ff9999;
      }
    </style>
    <my-button type="secondary">ergewgt</my-button>
  `;
