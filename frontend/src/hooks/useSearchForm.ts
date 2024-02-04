import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

type queryKeys = 'division' | 'weight' | 'belt';
const initialQuery = { division: '', weight: '', belt: '' };

export function useSearchForm() {
  const [query, setQuery] = useState<Record<queryKeys, string>>(initialQuery);
  const router = useRouter();
  const params = useSearchParams();

  const setCategory = (division: string) => {
    if (query.division !== division) {
      setWeight('');
      setBelt('');
    }
    setQuery((state) => ({ ...state, division }));
  };
  const setWeight = (weight: string) =>
    setQuery((state) => ({ ...state, weight: weight.toString() }));
  const setBelt = (belt: string) => setQuery((state) => ({ ...state, belt }));

  const search = () => {
    const queryString = new URLSearchParams(Object.entries(query).filter((el) => el[1])).toString();
    if (queryString) {
      router.push(`/list?${queryString}`);
    }
  };

  const reset = () => {
    setQuery(initialQuery);
    if (params.toString()) {
      router.push('/list');
    }
  };

  useEffect(() => {
    if (params.toString()) {
      const division = params.get('division');
      const weight = params.get('weight');
      const belt = params.get('belt');
      if (division) setCategory(division);
      if (weight) setWeight(weight);
      if (belt) setBelt(belt);
      console.log(Object.fromEntries(params.entries()));
    }
  }, [params]);

  return [query, setCategory, setWeight, setBelt, search, reset] as const;
}
