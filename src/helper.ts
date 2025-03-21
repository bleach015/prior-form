import { useMemo } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import queryString from "query-string";

export const useRouter = () => {
    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    return useMemo(() => {
        return {
            push: navigate,
            pathname: location.pathname,
            query: {
                ...queryString.parse(location.search.slice(1)),
                ...params,
            },
            location,
            navigate,
        };
    }, [location, navigate, params]);
};
