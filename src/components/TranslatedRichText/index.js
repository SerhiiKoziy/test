/* @flow 
* Markdown reference: http://commonmark.org/help/
*/
import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import { injectIntl } from 'react-intl';
import classNames from 'classnames';

import styles from './styles.css';

type Props = {|
  intl: Object,
  id: string,
  defaultMessage: string,
  values?: Object,
  description?: string,
  upperCase?: boolean,
  containerStyle?: string,
|};

class TranslatedRichText extends Component<void, Props, void> {
  render() {
    const { intl, id, defaultMessage, values, description, containerStyle, upperCase } = this.props;
    const messageDescriptor = {
      id,
      defaultMessage,
      description,
    };
    const message = !this.props.intl.messages[id]
      ? defaultMessage
      : intl.formatMessage(messageDescriptor, values);
    return (
      <ReactMarkdown
        className={classNames(styles.displayInline, containerStyle)}
        source={upperCase ? message.toUpperCase() : message}
        disallowedTypes={['Paragraph']}
        unwrapDisallowed
      />
    );
  }
}

export default injectIntl(TranslatedRichText);
