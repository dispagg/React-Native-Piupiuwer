import { useEffect, useState } from 'react';
import { PiuInterface } from '../../interfaces';
import api from '../../services/api';
import Home from '../../templates/Home';

function HomePage() {
  const [Pius, setPius] = useState<PiuInterface[]>([]);

  const getPius = async () => {
    const response = await api.get('/pius');
    setPius(response.data.slice(0, 20));
  };

  useEffect(
    () => {
      getPius();
    },
    [],
  );

  return (
    <Home pius={Pius} setPius={setPius} />
  );
}

export default HomePage;
