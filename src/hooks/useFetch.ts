import { useState, useEffect } from "react";
import axiosInstance from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";
import { Genres } from "./useGenre";

interface FetchGamesFormat<T> {
  count: number;
  results: T[];
}
const useFetch = <T>(endPoint: string, requestConfig?: AxiosRequestConfig, dep?: any[]) => {
  const [games, setGames] = useState<T[]>([]);
  const [errors, setErrors] = useState("");
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    axiosInstance
      .get<FetchGamesFormat<T>>(endPoint, { signal: controller.signal, ...requestConfig })
      .then((res) => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErrors(err.message);
        setLoading(false);
      });
    return () => controller.abort();
  }, dep ? [...dep] : []);

  return { games, errors, isLoading };
};
export default useFetch;
