import { ISPListItems } from "../common/SPEntities";

export enum ListItemsOrderBy {
  Id = 1,
  Title
}

/**
 * Options used to sort and filter
 */
export interface IListItemsOptions {
  orderBy?: ListItemsOrderBy;

  selectedFields?: string[];
}
export interface ISPService {
  /**
   * Get the lists from SharePoint
   * @param options Options used to order and filter during the API query
   */
  getListItems(options?: IListItemsOptions): Promise<ISPListItems>;
}
