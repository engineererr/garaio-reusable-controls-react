import { WebPartContext } from '@microsoft/sp-webpart-base';
import { ApplicationCustomizerContext } from '@microsoft/sp-application-base';
import { ISPListItem } from './../../common/SPEntities';
export interface IItemViewerProps {
  context: WebPartContext | ApplicationCustomizerContext;
  title: string;
  listName?: string;
}

export interface IItemViewerState {
  item: ISPListItem;
}
