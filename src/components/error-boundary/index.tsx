import { PropsWithChildren } from 'react';
import { ErrorBoundary as EB } from 'react-error-boundary';

import { fallbackRender } from './fallback-render';

const ErrorBoundary = ({ children }: PropsWithChildren<{}>) => {
  return <EB fallbackRender={fallbackRender}>{children}</EB>;
};

export default ErrorBoundary;
