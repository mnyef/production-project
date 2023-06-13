import { Link } from 'react-router-dom';

import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/provider/ThemeProvider';
import { AppRouter } from './provider/router';
import { Navbar } from 'widgets/Navbar';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Navbar />
      <AppRouter />
    </div>
  );
};
export default App;
