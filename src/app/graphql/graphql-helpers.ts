import { DOCUMENTS } from '../../api-introspection/documents';
import { DocumentTypes } from '../../api-introspection/documentTypes';

export function importQuery(search: DocumentTypes) {
    let result;
    Object.keys(DOCUMENTS)
    .filter(doc => {
      if (doc.indexOf(<any>search) !== -1) {
        result = DOCUMENTS[doc];
      }
    });
    if (!result) {
      throw new Error(`Missing query: ${search}`);
    }
    return result;
}