import React, { Suspense } from 'react';
import Spinner from 'components/spinner';

type ReturnType<T> = (props: T) => JSX.Element;

export const withLoading = <T extends object>(Component: React.ComponentType<T>): ReturnType<T> => {
  return (props: T) => (
    <Suspense fallback={<Spinner size={100} overlay={true} />}>
      <Component {...props} />
    </Suspense>
  );
};
