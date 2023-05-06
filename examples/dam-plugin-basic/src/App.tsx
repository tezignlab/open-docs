import React from 'react';
import ReactDOM from 'react-dom/client';
import $styles from './App.module.css';

function App(props: any) {
  return (
    <div className={$styles.app}>
      <h1>Hello world</h1>
      <button
        className={$styles.button}
        onClick={() => {
          alert('Hello World!');
        }}>
        Button
      </button>
    </div>
  );
}

const weakMap = new WeakMap<HTMLElement | ShadowRoot, ReactDOM.Root>();

function render(root: HTMLElement | ShadowRoot, props?: any) {
  console.log('...', arguments);

  let reactDOMRoot = weakMap.get(root);
  if (!reactDOMRoot) {
    reactDOMRoot = ReactDOM.createRoot(root);
    weakMap.set(root, reactDOMRoot);
  }

  reactDOMRoot.render(
    <React.StrictMode>
      <App {...props} />
    </React.StrictMode>,
  );
}

export { render };
