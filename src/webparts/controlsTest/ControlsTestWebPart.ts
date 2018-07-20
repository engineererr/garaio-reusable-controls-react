import { ApplicationCustomizerContext } from '@microsoft/sp-application-base';
import { WebPartContext } from '@microsoft/sp-webpart-base';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'ControlsTestWebPartStrings';
import ControlsTest from './components/ControlsTest';
import { IControlsTestProps } from './components/IControlsTestProps';

export interface IControlsTestWebPartProps {
  context: WebPartContext | ApplicationCustomizerContext;
  description: string;
}

export default class ControlsTestWebPart extends BaseClientSideWebPart<IControlsTestWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IControlsTestProps> = React.createElement(
      ControlsTest,
      {
        context: this.context,
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
