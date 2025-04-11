import { Button, ButtonProps } from 'antd';
import styled from 'styled-components';

export const Btn = ({ ...props }: ButtonProps) => (
  <StyledButton
    block
    type={props.type || 'primary'}
    $isPrimary={props.type !== 'default'}
    {...props}
  />
);

export const StyledButton = styled(Button)<{ $isPrimary: boolean }>`
  align-items: center;
  display: flex;
  justify-content: center;
  text-transform: ${({ $isPrimary }) => ($isPrimary ? 'uppercase' : 'none')};
`;
