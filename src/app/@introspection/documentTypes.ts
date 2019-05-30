
function strEnum<T extends string>(o: Array<T>): {[K in T]: K} {
    return o.reduce((res, key) => {
        res[key] = key;
        return res;
    }, Object.create(null));
}
export const DocumentTypes = strEnum(['app.query.graphql',
'subscribe.query.graphql']);
export type DocumentTypes = keyof typeof DocumentTypes;
