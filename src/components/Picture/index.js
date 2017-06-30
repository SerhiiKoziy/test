/* @flow */
import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';

import styles from './styles.css';

type Source = {|
  maxWidth: number,
  srcset: string,
|};

type Props = {|
  sources: Array<Source>,
  defaultSrc: string,
  alt: string,
  enableSpinner?: boolean,
  onClick?: () => any,
|};

type State = {|
  isLoading: boolean,
|};

class Picture extends Component<void, Props, State> {
  state = {
    isLoading: true,
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  _renderSource = (source: Source) => {
    return (
      <source
        key={source.maxWidth}
        media={`(max-width: ${source.maxWidth}px)`}
        sizes={'100vw'}
        srcSet={source.srcset}
      />
    );
  };

  componentDidMount() {
    // with SSR images can be loaded before the component on the client
    const img = findDOMNode(this.refs.mainImg);
    if (img && img.complete) {
      this.setState({ isLoading: false });
    } else {
      this.setState({ isLoading: true });
    }
  }

  render = () => {
    const { sources, defaultSrc, alt, enableSpinner, onClick } = this.props;
    const { isLoading } = this.state;
    return (
      <div className={styles.container}>
        {enableSpinner &&
          isLoading &&
          <div className={styles.spinnerContainer}>
            <div className={styles.spinner}>
              <div className={styles.doubleBounce1} />
              <div className={styles.doubleBounce2} />
            </div>
          </div>}
        <picture key={alt} className={styles.img}>
          {sources && sources.map(this._renderSource)}
          <img
            ref="mainImg"
            alt={alt}
            src={defaultSrc}
            onLoad={() => this.setState({ isLoading: false })}
            onError={() => this.setState({ isLoading: false })}
            className={styles.img}
            onClick={onClick}
          />
        </picture>
      </div>
    );
  };
}

export default Picture;
