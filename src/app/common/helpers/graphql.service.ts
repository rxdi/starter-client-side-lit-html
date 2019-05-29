import { Injectable } from "@rxdi/core";
import { CacheService, CacheLayerItem, CacheLayerInstance } from "@rxdi/cache";
import { IQuery, IMutation } from "src/api-introspection";
type ReturnResult = IQuery | IMutation;

interface ReturnResponse {
  data: ReturnResult;
}

@Injectable()
export class GraphqlService extends CacheService {
  async fetch<K>(query: string, args?: any[]): Promise<ReturnResponse> {
    const fetchCache = this.create<ReturnResponse>({
      name: "graphql-request-cache"
    });
    const cacheString = this.makeCacheParams(query, args);
    if (fetchCache.get(cacheString)) {
      return fetchCache.get(cacheString)["data"];
    }
    const data: ReturnResponse = await (await fetch(
      "https://questups.com/api/graphql",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query })
      }
    )).json();
    fetchCache.put({ key: cacheString, data });
    return data;
  }

  private makeCacheParams(query: string, ...args: any[]) {
    return `${query} + ${args ? args : ""}`;
  }
}
