import styled from 'styled-components';

export const FieldWrapper = styled.div`
  position: relative;

  .prefix-icon-wrapper {
    align-items: center;
    display: flex;
    justify-content: center;
    height: var(--full);
    position: absolute;
    width: 2.5rem;
    z-index: 1;

    svg {
      height: var(--base);
      width: var(--base);
    }
  }

  && .ant-select .ant-select-selector,
  .ant-picker {
    padding-left: 30px;
  }
`;
