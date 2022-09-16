import { useRoutes } from 'react-router-dom';

import AddressPortal from '@components/AddressPortal';
import KeywordAddress from '@components/KeywordAddress';
import Login from '@components/Login';
import NavigationBar from '@components/NavigationBar';
import OptionPortal from '@components/OptionPortal';
import SearchPortal from '@components/SearchPortal';
import { Mobile } from '@query/mediaQuery';
import { routes } from '@router';
import Styles from '@styles';

const App = () => {
  const element = useRoutes(routes);

  return (
    <div className='App'>
      <Styles>
        {element}
        <Login />
        <SearchPortal />
        <AddressPortal />
        <OptionPortal />
        <KeywordAddress />
        <Mobile>
          <NavigationBar />
        </Mobile>
      </Styles>
    </div>
  );
};

export default App;
