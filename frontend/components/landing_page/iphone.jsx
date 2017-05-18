import React from 'react';
import { Link, withRouter } from 'react-redux';
import DemoFeedItem from './demo_feed_item';


class Iphone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {user1: "Brandon", user2: "Zach", memo: "for kale salad. yum yum yum"},
        {user1: "John", user2: "Michael", memo: "for food"},
        {user1: "Abby", user2: "Emma", memo: "for ice-cream"},
        {user1: "Brandon", user2: "Zach", memo: "for kale salad. yum yum yum"},
        {user1: "William", user2: "Gabriela", memo: "for lunch"},
        {user1: "Paul", user2: "Simon", memo: "I owe u"},
        {user1: "Brandon", user2: "Zach", memo: "for kale salad. yum yum yum"},
        {user1: "Sarah", user2: "Tom", memo: "Thanks sweetie"},
        {user1: "Adam", user2: "Zach", memo: "Thanks man"},
        {user1: "Brandon", user2: "Zach", memo: "for kale salad. yum yum yum"},
        {user1: "Chris", user2: "Zach", memo: "chipotle"},
        {user1: "Rupert", user2: "Oscar", memo: "We've got weird names"},
        {user1: "Sally", user2: "Joe", memo: "Idk"}
      ]
    };

    // this.animate = this.animate.bind(this);

  }

  componentDidMount() {
    this._tick();
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }


  _tick() {
    this.interval = setInterval(() => {
      this._rotate()
    }, this.props.attrs.speed);
  }


  _rotate() {
    let list = this.state.list;
    let newList = [list[list.length-1]].concat(list.slice(0,list.length-1))

    this.setState({
      list: newList
    });
  }

  // toggleClass() {
  //
  // }

  // animate(e) {
  //   e.preventDefault();
  //   if (this.state.iphoneClass === "") {
  //     this.setState({ iphoneClass: "iphones-animation"});
  //   } else {
  //     this.setState({ iphoneClass: "" });
  //   }
  // }

  render() {
    return (
      <div className={`iphone-container ${this.props.attrs.scale} ${this.props.attrs.iphoneClass}`}>
        <div className="iphone">
          <div className="above-screen">
            <div className="iphone-camera"></div>
            <div className="iphone-speaker"></div>
          </div>
          <ul className="animatedFeed">
            {this.state.list.map((item, i) => {
              return <DemoFeedItem key={i} item={item} />
            })}
          </ul>
          <div className="iphone-button">
          </div>
        </div>
      </div>
    );
  }
}

export default Iphone;
