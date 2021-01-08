const { default: pathes } = require("./pathes");

const routes = [
    {
        name: "INDEX",
        path: pathes.INDEX,
        // component:
        exact: true,
    },
    {
        name: "Profile",
        path: pathes.PROFILE,
        // component:
        exact: true,
    },
    {
        name: "PRODUCT",
        path: pathes.PRODUCT,
        // component:
        exact: true,
    },
    {
        name: "FORBIDDEN",
        path: pathes.FORBIDDEN,
        // component:
        exact: true,
    },
    {
        name: "NOT_FOUND",
        path: pathes.INDEX,
        // component:
        exact: true,
    },
]

export default routes;