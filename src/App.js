import React from 'react';
import { Localized } from 'fluent-react';

export default function App() {
  const component = <p>this is a component</p>
  const date = new Date();
  return (
    <div>
      <Localized id="title" $date={date} $component={component}>
        <h1>Hello, world!</h1>
      </Localized>
      <Localized
        id="welcome"
        $linkA={
        <a href="http://example.com/A">A</a>
        }
        $linkB={
        <Localized id="link-to-b">
          <a href="http://example.com/B">B</a>
        </Localized>
        }>
        <p>{'Click { $linkA } or { $linkB}.'}</p>
      </Localized>
    </div>
  );
}
