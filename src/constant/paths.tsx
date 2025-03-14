import qs from "qs";

type ParamType = { [p: string]: any } | undefined;
type Option<RouteParam extends ParamType, QueryParam extends ParamType> = {
    routeParam?: RouteParam;
    queryParam?: QueryParam;
};

const generate =
    <
        RouteParam extends ParamType = undefined,
        QueryParam extends ParamType = undefined
    >(
        url: string
    ) =>
    (option?: Option<RouteParam, QueryParam>) => {
        const { routeParam, queryParam } = option || {};
        let newQueryParam = "";
        if (queryParam) {
            newQueryParam = `?${qs.stringify(queryParam)}`;
        }

        let newUrl = url;
        if (routeParam) {
            const urls = url.split("/");
            newUrl = urls
                .map((u) => {
                    if (/:.+/.test(u)) {
                        return routeParam[u.slice(1)];
                    }
                    return u;
                })
                .join("/");
        }
        return `${newUrl}${newQueryParam}`;
    };

const priorForm = generate("/prior-form");
const submit = generate("/submit");
const wiki = generate("/wiki");

const paths = {
    priorForm,
    submit,
    wiki,
};

export default paths;
