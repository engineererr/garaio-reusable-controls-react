import * as React from 'react';
import styles from './ControlsTest.module.scss';
import { IControlsTestProps } from './IControlsTestProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { ItemViewer } from '../../../controls/itemViewer';

export default class ControlsTest extends React.Component<IControlsTestProps, {}> {
  public render(): React.ReactElement<IControlsTestProps> {
    return (
      <div className={styles.controlsTest}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <ItemViewer context={this.props.context} title="Item Viewer" listName={"InfoItem"} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
