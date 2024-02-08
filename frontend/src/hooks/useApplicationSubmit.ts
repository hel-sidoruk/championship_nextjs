import { Values } from '@/types';
import axios from 'axios';
import { useState } from 'react';

type ReturnType = [(v: Values) => void, () => void, boolean, boolean];

export function useApplicationSubmit(): ReturnType {
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const sendApplication = (values: Values) => {
    setIsLoading(true);
    axios
      .post(`https://api.bncbjj.site/applications`, values)
      // .post(`http://localhost:5000/applications`, values)
      .then(({ data }) => data.success && setSuccess(true))
      .finally(() => setIsLoading(false));
  };

  const reset = () => setSuccess(false);

  return [sendApplication, reset, success, isLoading];
}
