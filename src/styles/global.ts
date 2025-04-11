import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --ss: 0.5rem; // 8px
    --xs: 0.75rem; // 12px
    --sm: 0.875rem; // 14px
    --base: 1rem; // 16px
    --lg: 1.125rem; // 18px
    --xl: 1.25rem; // 20px
    --2xl: 1.5rem; // 24px
    --3xl: 2rem; // 32px
    --4xl: 4rem; // 48px
    --full: 100%;

    --white: #fff;
    --purple: #D5DAF4;
    --gray: #F2F4F8;
    --light-gray: #F1F1F1;
    --primary: #0EA5E9;
    --sky: #b7e4f8;
    --text-high-contrast: rgb(49, 49, 49);
    --text-high-contrast-rgb-value: 49, 49, 49;
    --background-site-rgb-value: 249, 249, 249;
    --shadow: 1px 3px 13px 0px rgba(0, 0, 0, 0.05);
    --success: #008000;
    --success-bg: #0080001a;
    --warning: #FFA500;
    --warning-bg: #FFA5001a;
  }

  #root {
    height: 100%;
  }

  * {
    box-sizing: border-box;
    font-family: SF Pro Display, sans-serif;
    outline: none;
    -webkit-tap-highlight-color: transparent;
  }

  html, body, body div, span, object, iframe, h1, h2, h3, h4, h5, h6, p, img, ul, li, ol, a {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
  }

  body {
    font-size: var(--base);
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    -ms-overflow-style: none;
    scrollbar-width: none;

    ::-webkit-scrollbar {
      display: none;
    }

    &:has(.ant-modal-root) {
      touch-action: auto;
    }
  }

  h1 {
    color: #0C4A6E;
    font-size: var(--2xl);
    font-weight: 700;
  }

  h2 {
    color: var(--white);
    font-size: var(--base);
    font-weight: 600;
  }

  h3 {
    color: #000;
    font-size: var(--base);
    font-weight: 700;
  }

  svg:not([fill]) {
    fill: currentColor;
  }

  ul:not(.ant-pagination, .ant-rate) {
    display: flex;
    flex-direction: column;
    gap: var(--ss);
    list-style-type: disc;
    margin-left: var(--base);
  }

  a {
    color: #0EA5E9;
    font-size: var(--sm);
    text-decoration: none;
    outline: none;
    user-select: none;

    &:hover {
      color: #0EA5E9;
    }
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    appearance: none;
    margin: 0;
  }

  .ant-form,
  .ant-picker,
  .ant-input-number,
  .ant-input-number-outlined,
  .ant-input-number-filled,
  .ant-input-number-group-wrapper,
  .ant-space,
  .ant-form-item-required {
    width: var(--full);
  }

  .ant-select-selection-search-input {
    font-size: var(--base);
  }

  .ant-tabs-nav {
    background: var(--white);
  }

  .ant-pagination-item-active a {
    color: var(--white) !important;
  }

  .ant-tabs-tab-btn {
    margin: 0 var(--sm);
  }

  .ant-timeline-item-last {
    padding-bottom: 0 !important;
  }

  .ant-form-item-label {
    font-weight: 500;
  }

  .ant-input-number-handler-wrap {
    display: none !important;
  }

  @media (max-width: 992px) {
    .ant-picker-dropdown-range {
      .ant-picker-panel:last-child .ant-picker-date-panel {
        display: none !important;
      }

      .ant-picker-panel:first-child
        .ant-picker-date-panel
        .ant-picker-header-next-btn,
      .ant-picker-panel:first-child
        .ant-picker-date-panel
        .ant-picker-header-super-next-btn {
        visibility: initial !important;
      }

      .ant-picker-panel.ant-picker-range-wrapper {
        min-width: 288px !important;
      }

      .ant-picker-presets {
        display: none !important;
      }
    }
  }

  .tabular {
    font-variant-numeric: tabular-nums;
  }

  /* .timepicker-ui {
    &-modal {
      background: rgba(0, 0, 0, 0.45) !important;
    }

    &-wrapper {
      box-shadow: none !important;

      .timepicker-ui-hour.active,
      .timepicker-ui-type-mode.active,
      .timepicker-ui-circle-hand,
      .timepicker-ui-clock-hand,
      .timepicker-ui-dot {
        background: var(--primary);
        color: var(--white);
      }

      .timepicker-ui-cancel-btn, .timepicker-ui-ok-btn {
        color: var(--primary);
      }
    }
  } */

  .page-enter {
    opacity: 0;
    transform: translateX(100%);
  }

  .page-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 500ms, transform 500ms;
  }

  .page-exit {
    opacity: 1;
    transform: translateX(0);
  }

  .page-exit-active {
    opacity: 0;
    transform: translateX(-100%);
    transition: opacity 500ms, transform 500ms;
  }

  .shake {
    animation: shake 0.2s ease-in-out 0s 2;
  }

  @keyframes shake {
    0% {
      transform: translateX(0rem);
    }
    25% {
      transform: translateX(0.5rem);
    }
    75% {
      transform: translateX(-0.5rem);
    }
    100% {
      transform: translateX(0rem);
    }
  }

  .visually-hidden {
    position: absolute;
    border: 0;
    width: 1;
    height: 1;
    padding: 0;
    margin: -1;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    word-wrap: normal;
  }
`;
