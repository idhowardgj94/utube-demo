// @flow
import * as React from 'react';
import { createContext, useState } from 'react';

export type Context = [
  {
    title: string,
    description: string,
    duration: string,
  },
  Function
];

export const VContext: React$Context<Context> = createContext<Context>([
  {
    title: 'demo',
    description: '請從首頁點選',
    duration: '5小時了我想',
  },
  () => {},
]);

export function ContextProvider(props: React.ElementProps<any>): React$Node {
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
