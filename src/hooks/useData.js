import { useEffect, useState } from "react";

export const useData = (fn, param) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fn(param).then(setData).catch(setError);
  }, [fn, param]);

  return [data, setData, error];
};
