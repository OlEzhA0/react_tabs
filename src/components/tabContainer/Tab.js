import React from 'react';

class Tab extends React.Component {
  handleTab = e => this.props.event(e, this.props.tab);

  render() {
    const { tab, active } = this.props;
    const { title, id} = tab;

    this.classList = id === active
      ? `tab__item tab__active`
      : `tab__item tab__disabled`;

    return (
      <li className={this.classList} id={id} onClick={this.handleTab}>
        {title}
      </li>
    );
  }
}

export default Tab;
