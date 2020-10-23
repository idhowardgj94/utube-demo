// @flow
import * as React from 'react';
import { createContext, useState } from 'react';

export type Context = [
  {
    title: String,
    description: String,
    duration: String,
  },
  () => void
];

export const VContext = createContext<Context>([
  {
    title: 'demo',
    description: '請從首頁點選',
    duration: '5小時了我想',
  },
  () => {},
]);

export function ContextProvider(props: React.PropsWithChildren<any>) {
  const [state, setstate] = useState({
    title: 'demo',
    description: '請從首頁點選',
    duration: '5小時了我想',
  });
  return (
    <VContext.Provider value={[state, setstate]}>
      {props.children}
    </VContext.Provider>
  );
}

export default ContextProvider;
