import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetchMainPage(pageNumber) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_API_URL}/questions/`,
      params: {
        page: pageNumber,
      },
    })
      .then((res) => {
        console.log(res.data.data);
        setData((datas) => {
          return [...datas, ...res.data.data];
        });
        setHasMore(res.data.data.length > 0);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  }, [pageNumber]);
  return { data, loading, error, hasMore };
}
