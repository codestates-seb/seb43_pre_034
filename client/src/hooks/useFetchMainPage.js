import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetchMainPage(query, pageNumber) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;
    axios({
      method: "GET",
      url: "http://openlibrary.org/search.json",
      params: {
        q: query,
        page: pageNumber,
      },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setData((datas) => {
          return [
            ...new Set([...datas, ...res.data.docs.map((el) => el.title)]),
          ];
        });
        setHasMore(res.data.docs.length > 0);
        setLoading(false);
      })
      .catch((error) => {
        if (axios.isCancel(error)) return;
        setError(true);
      });
    return () => cancel();
  }, [query, pageNumber]);
  return { data, loading, error, hasMore };
}
