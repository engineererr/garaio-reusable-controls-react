import { ISPListItems } from '../common/SPEntities';
import { ISPService, IListItemsOptions, ListItemsOrderBy } from "./ISPService";
import { WebPartContext } from "@microsoft/sp-webpart-base";
import { ApplicationCustomizerContext } from '@microsoft/sp-application-base';
import { SPHttpClient, SPHttpClientResponse } from "@microsoft/sp-http";

export default class SPService implements ISPService {

  constructor(private _context: WebPartContext | ApplicationCustomizerContext, private _listName: string) { }

  /**
   * Get list items
   * @param options
   */
  public getListItems(options?: IListItemsOptions): Promise<ISPListItems> {
    let queryUrl: string = `${this._context.pageContext.web.absoluteUrl}/_api/web/lists/GetByTitle('${this._listName}')/items?`;

    if (options) {
      if (options.orderBy) {
        queryUrl += `&$orderby=${options.orderBy === ListItemsOrderBy.Id ? 'Id' : 'Title'}`;
      }

      if (options.selectedFields) {
        let joinedFields: string = options.selectedFields.join(",");
        queryUrl += `&$select=${joinedFields}`;
      }
    }

    // remove question mark at the end if no query string was specified
    if (queryUrl.charAt(queryUrl.length - 1) === "?") {
      queryUrl.substring(0, queryUrl.length - 2);
    }

    return this._context.spHttpClient.get(queryUrl, SPHttpClient.configurations.v1)
      .then(response => response.json()) as Promise<ISPListItems>;
  }
}
