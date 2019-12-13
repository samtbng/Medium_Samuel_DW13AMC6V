import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import Button from '@material-ui/core/Button';
import '../App.css';
 
// list of items
const list = [
  { name: 'Home', url:"/"},
  { name: 'One Zero', url:"/category_page"},
  { name: 'Elemental', url:"/"},
  { name: 'Zora', url:"/"},
  { name: 'Force', url:"/"},
  { name: 'Human Parts', url:"/"},
  { name: 'Marker', url:"/"},
  { name: 'Zora', url:"/"},
  { name: 'Heated', url:"/"},
  { name: 'Modus', url:"/"},
  { name: 'More', url:"/"},
];
 
// One item component
// selected prop will be passed
const MenuItem = ({text, selected}) => {
  return <div
    className={`menu-item ${selected ? 'active' : ''}`}
    >{text}</div>;
};
 
// All items component
// Important! add unique key
export const Menu = (list, selected) =>
  list.map(items => {
    return <Button href={items.url}><MenuItem text={items.name} key={items.name} selected={selected} /></Button>;
  });
 
const Arrow = ({ text, className }) => {
  return (
    <div
      className={className}
    >{text}</div>
  );
};
const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });
 
const selected = '';
 
class Navigation extends Component {
  constructor(props) {
    super(props);
    // call it again if items count changes
    this.menuItems = Menu(list, selected);
  }
 
  state = {
    selected
  };
 
  onSelect = key => {
    this.setState({ selected: key });
  }
 
 
  render() {
    const { selected } = this.state;
    // Create menu from items
    const menu = this.menuItems;
 
    return (
      <div className="App">
        <ScrollMenu
          data={menu}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          selected={selected}
          onSelect={this.onSelect}
        />
      </div>
    );
  }
}
export default Navigation