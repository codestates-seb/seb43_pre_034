import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetchMainPage(pageNumber) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [datas, setData] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [dataAmount, setDataAmount] = useState(0);
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
        setData((datas) => {
          //중복된 array 제거 객체이기 때문에 newSet을 써도 소용X
          return [...new Set([...datas, ...res.data.data])];
        });
        setDataAmount(res.data.pageInfo.totalElements);
        setHasMore(res.data.data.length > 0);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  }, [pageNumber]);
  return { datas, loading, error, hasMore, dataAmount };
}
