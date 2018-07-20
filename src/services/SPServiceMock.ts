import { ISPListItems } from '../common/SPEntities';
import { ISPService, IListItemsOptions } from "./ISPService";

export default class SPServiceMock implements ISPService {
  private _includeDelay?: boolean;
  private _delayTimeout?: number;

  constructor(includeDelay?: boolean, delayTimeout?: number) {
    this._includeDelay = includeDelay;
    this._delayTimeout = delayTimeout || 500;
  }

  /**
  * The mock lists to present to the local workbench
  */
  private static _lists: ISPListItems = {
    value: [
      { Id: '8dc80f2e-0e01-43ee-b59e-fbbca2d1f35e', Title: 'Mock List One' },
      { Id: '772a30d4-2d62-42da-aa48-c2a37971d693', Title: 'Mock List Two' },
      { Id: '16c0d1c6-b467-4823-a37b-c308cf730366', Title: 'Mock List Three' }
    ]
  };
  public getListItems(options?: IListItemsOptions): Promise<ISPListItems> {
    return new Promise<ISPListItems>(async resolve => {
      if (this._includeDelay === true) {
        await this.sleep(this._delayTimeout); // Simulate network load
      }
      resolve(SPServiceMock._lists);
    });
  }
  /**
  * Locks the thread for the specified amount of time
  * @param ms Milliseconds to wait
  */
  private sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
