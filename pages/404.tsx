import { useRouter } from 'next/router';
import { useEffect } from 'react';

/**
 * Error page when invalid url is entered from user
 * @returns routes page to error
 */
const NotFound = (): void => {
  const routes = useRouter();

  useEffect(() => {
    routes.push('/error');
  }, []);
};

export default NotFound;
