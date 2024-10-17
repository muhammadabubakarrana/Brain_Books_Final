import {useState} from 'react';

export function useHooks() {
  const [loading, setLoading] = useState(false);

  return {loading, setLoading};
}
