import { WebPartContext } from '@microsoft/sp-webpart-base';
import { ApplicationCustomizerContext } from '@microsoft/sp-application-base';

export interface IControlsTestProps {
  context: WebPartContext | ApplicationCustomizerContext
  description: string;
}
