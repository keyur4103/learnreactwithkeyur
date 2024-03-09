import { useState, useEffect } from "react";

function useAsync(asyncFunction, immediate = true) {
  const [status, setStatus] = useState("idle");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (immediate) {
      execute();
    }

    async function execute() {
      setStatus("pending");
      setData(null);
      setError(null);
      try {
        const result = await asyncFunction();
        setData(result);
        setStatus("success");
      } catch (error) {
        setError(error);
        setStatus("error");
      }
    }
  }, [asyncFunction, immediate]);

  return { status, data, error };
}

export default useAsync;
