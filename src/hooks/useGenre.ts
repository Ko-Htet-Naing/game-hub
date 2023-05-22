import { useEffect, useState } from "react";
import axiosInstance from "../services/api-client";
import { CanceledError } from "axios";

export interface Genres {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

export interface FetchGenreFormat {
  count: number;
  results: Genres[];
}

const useGenre = () => {
  const [genres, setGenres] = useState<Genres[]>([]);
  const [errors, setErrors] = useState('');
  const [isloading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    axiosInstance
      .get<FetchGenreFormat>("/genres", { signal: controller.signal })
      .then(res => {
        setGenres(res.data.results);
        setLoading(false);
      })
      .catch(err => {
        if (err instanceof CanceledError) return;
        setErrors(err)
        setLoading(false)
      });

    return () => controller.abort();
  }, []);
  return { genres, errors, isloading }
}
export default useGenre;