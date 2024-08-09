import { render } from '@testing-library/react';
import App from './Components/App';

test('renders without crashing', () => {
  const div = document.createElement('div');
  render(<App />, div);
  expect(div).toBeInTheDocument();
});
