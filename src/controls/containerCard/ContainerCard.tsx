import * as React from "react";
import styles from "./ContainerCard.module.scss";

export interface IContainerCardProps {
  title: string;
  siteUrl: string;
  description: string;
  pictureUrl?: string;
}

export class ContainerCard extends React.Component<IContainerCardProps, {}> {
  constructor(props: IContainerCardProps) {
    super(props);
  }
  public render(): React.ReactElement<IContainerCardProps> {
    let imageStyle: any = {};
    if (this.props.pictureUrl) {
      imageStyle = {
        backgroundImage: "url(" + this.props.pictureUrl + ")"
      };
    }

    if (this.props.siteUrl) {
      return (
        <div className={styles.containerCard} >
          <div className={styles.header}>
            <a href={this.props.siteUrl} target="_blank" >
              <div className={styles.background}></div>
              <div className={styles.image} style={imageStyle}></div>
              <div className={styles.title} >{this.props.title}</div>
              <div className={styles.description} >{this.props.description}</div>
            </a>
          </div>
        </div>
      );
    } else {
      return (
        <div className={styles.containerCard}>
          <div className={styles.header}>
            <div className={styles.background}></div>
            <div className={styles.image} style={imageStyle} ></div>
            <div className={styles.title}>{this.props.title}</div>
            <div className={styles.description}> {this.props.description}</div>
          </div>
        </div>
      );
    }
  }
}
