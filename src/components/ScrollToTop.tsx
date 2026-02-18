import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Hace scroll al inicio de la página cuando cambia la ruta.
 * Soluciona que al navegar desde el footer la vista quede abajo.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
