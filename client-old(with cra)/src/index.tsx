import { createRoot, Root } from 'react-dom/client';

import App from './App';

const rootElement: Element | null = document.getElementById('root');

if (rootElement) {
  const root: Root = createRoot(rootElement);

  root.render(<App />);
}
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<App />)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
