import routes from './routes';
import './App.css';
import { useRoutes } from 'react-router-dom';

const App = () => {
  const content = useRoutes(routes);
  return content;
}

export default App;
