/* eslint-disable prettier/prettier */

function strEnum<T extends string>(o: Array<T>): { [K in T]: K } {
  return o.reduce((res, key) => {
    res[key] = key;
    return res;
  }, Object.create(null));
}
export const DocumentTypes = strEnum(['launch.fragment.graphql',
  'launches-past.query.graphql']);
export type DocumentTypes = keyof typeof DocumentTypes;