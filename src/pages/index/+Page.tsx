import { Counter } from './Counter.jsx';
import React from 'react';

export default function Page() {
  return (
    <>
      <h1 className={'pb-4 text-3xl font-bold'}>My Vike app</h1>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
    </>
  );
}
