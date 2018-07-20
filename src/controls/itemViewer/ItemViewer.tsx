import * as React from "react";
import styles from "./ItemViewer.module.scss";
import { ISPService } from "../../services/ISPService";
import { SPServiceFactory } from "../../services/SPServiceFactory";
import { ISPListItems } from "../../common";
import { IItemViewerProps, IItemViewerState } from "./IItemViewer";



export class ItemViewer extends React.Component<IItemViewerProps, IItemViewerState> {
  constructor(props: IItemViewerProps) {
    super(props);

    this.state = {
      item: undefined
    }
  }

  public componentDidMount() {
    this.loadItems();
  }

  private loadItems() {
    const { context } = this.props;
    const service: ISPService = SPServiceFactory.createService(context, true, 5000, this.props.listName);

    service.getListItems().then((results: ISPListItems) => {
      this.setState({ item: results.value[0] });
    })
  }
  public render(): React.ReactElement<IItemViewerProps> {
    if (this.state.item !== undefined) {
      return (
        <div className={styles.containerCard} >
          <div className={styles.header}>
            <span>{this.state.item.Title}</span>
          </div>
        </div>
      );

    } else {
      return (
        <div className={styles.containerCard} >
          <div className={styles.header}>
            <span>{`no item found in ${this.props.listName}`}</span>
          </div>
        </div>
      );
    }
  }
}
