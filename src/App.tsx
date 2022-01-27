import './App.scss';
import './styles/shared.scss';

import { Routes, Route } from 'react-router-dom';
// import { useGetAnyDataQuery } from './store/services/storeApiCalls';
import { motion } from 'framer-motion';
import Home from './pages/Home';
import Navigation from './components/Navigation';
import Logo from './components/Logo';

const test = {
  start: { opacity: 0 },
  end: { opacity: 1 },
};

const App = () => {
  // const { data, error, isLoading, isError } = useGetAnyDataQuery(undefined);
  return (
    <motion.div
      variants={test}
      initial={test.start}
      animate={test.end}
      className="App"
    >
      <div className="nav-header-container">
        <Logo />
        <Navigation />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </motion.div>
  );
};

export default App;
