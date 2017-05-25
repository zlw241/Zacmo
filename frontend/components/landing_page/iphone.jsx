import React from 'react';
import { Link, withRouter } from 'react-redux';
import DemoFeedItem from './demo_feed_item';
import moment from 'moment';

class Iphone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {user1: "Brandon", user2: "Zach", memo: "for kale salad. yum yum yum", image_url: "http://s3.amazonaws.com/zacmo-dev/users/images/000/000/060/original/zlw241_adorable.io.png?1493402871", timeSince: moment()},
        {user1: "John", user2: "Michael", memo: "for food", image_url: "http://s3.amazonaws.com/zacmo-dev/users/images/000/000/064/original/gandalf_adorable.io.png?1493402863", timeSince: moment()},
        {user1: "Abby", user2: "Emma", memo: "for ice-cream", image_url: "http://s3.amazonaws.com/zacmo-dev/users/images/000/000/066/original/frodo_adorable.io.png?1493402866", timeSince: moment()},
        {user1: "Brandon", user2: "Zach", memo: "for kale salad. yum yum yum", image_url: "http://s3.amazonaws.com/zacmo-dev/users/images/000/000/074/original/ayellapragada_adorable.io.png?1493402878", timeSince: moment()},
        {user1: "William", user2: "Gabriela", memo: "for lunch", image_url: "http://s3.amazonaws.com/zacmo-dev/users/images/000/000/068/original/borimir_adorable.io.png?1493402873", timeSince: moment()},
        {user1: "Paul", user2: "Simon", memo: "I owe u", image_url: "http://s3.amazonaws.com/zacmo-dev/users/images/000/000/059/original/gimli_adorable.io.png?1493402870", timeSince: moment()},
        {user1: "Brandon", user2: "Zach", memo: "for kale salad. yum yum yum", image_url: "http://s3.amazonaws.com/zacmo-dev/users/images/000/000/063/original/gollum_adorable.io.png?1493402873", timeSince: moment()},
        {user1: "Sarah", user2: "Tom", memo: "Thanks sweetie", image_url: "http://s3.amazonaws.com/zacmo-dev/users/images/000/000/070/original/royce_adorable.io.png?1493402874", timeSince: moment()},
        {user1: "Adam", user2: "Zach", memo: "Thanks man", image_url: "http://s3.amazonaws.com/zacmo-dev/users/images/000/000/071/original/legolas_adorable.io.png?1493402875", timeSince: moment()},
        {user1: "Brandon", user2: "Zach", memo: "for kale salad. yum yum yum", image_url: "http://s3.amazonaws.com/zacmo-dev/users/images/000/000/078/original/aragorn_adorable.io.png?1493402882", timeSince: moment()},
        {user1: "Chris", user2: "Zach", memo: "chipotle", image_url: "http://s3.amazonaws.com/zacmo-dev/users/images/000/000/073/original/adumbward_adorable.io.png?1493402877", timeSince: moment()},
        {user1: "Rupert", user2: "Oscar", memo: "We've got weird names", image_url: "http://s3.amazonaws.com/zacmo-dev/users/images/000/000/076/original/guest_adorable.io.png?1493402883", timeSince: moment()},
        {user1: "Sally", user2: "Joe", memo: "Idk", image_url: "http://s3.amazonaws.com/zacmo-dev/users/images/000/000/069/original/sam_adorable.io.png?1493402874"}
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
    newList[0].timeSince = moment()
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
