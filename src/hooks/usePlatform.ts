import useFetch from "./useFetch";

interface resultProps {
    id: number;
    name: string;
    slug: string;
}
const usePlatform = () => useFetch<resultProps>("/platforms/lists/parents");
export default usePlatform;
