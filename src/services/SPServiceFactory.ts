import { ApplicationCustomizerContext } from '@microsoft/sp-application-base';
import { WebPartContext } from "@microsoft/sp-webpart-base";
import { ISPService } from "./ISPService";
import { Environment, EnvironmentType } from "@microsoft/sp-core-library";
import SPServiceMock from "./SPServiceMock";
import SPService from "./SPService";

export class SPServiceFactory {
  public static createService(context: WebPartContext | ApplicationCustomizerContext, includeDelay?: boolean, delayTimeout?: number, listName?: string): ISPService {
    if (Environment.type === EnvironmentType.Local) {
      return new SPServiceMock(includeDelay, delayTimeout);
    }
    return new SPService(context, listName);
  }
}
