import React from 'react';
import { Link, withRouter } from 'react-router';
import DemoFeedItem from './demo_feed_item';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [
        {user1: "John", user2: "Michael", memo: "for food"},
        {user1: "Abby", user2: "Emma", memo: "for ice-cream"},
        {user1: "William", user2: "Gabriela", memo: "for lunch"},
        {user1: "Paul", user2: "Simon", memo: "I owe u"},
        {user1: "Sarah", user2: "Tom", memo: "Thanks sweetie"},
        {user1: "Adam", user2: "Zach", memo: "Thanks man"},
        {user1: "Chris", user2: "Zach", memo: "chipotle"},
        {user1: "Rupert", user2: "Oscar", memo: "We've got weird names"},
        {user1: "Sally", user2: "Joe", memo: "Idk"}
      ]
    };

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
    }, 2000);
  }


  _rotate() {
    let list = this.state.list;
    let newList = [list[list.length-1]].concat(list.slice(0,list.length-1))

    this.setState({
      list: newList
    });
  }

  render() {
    return (
      <div className="landing-page-container">
        <div className="splash-img">
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

        <div className="splash-welcome">
          <div className="welcome-content">
            <h1>Send Money and make purchases.</h1>
            <button className="splash-page-signup">Sign up now</button>
          </div>
        </div>
      </div>
    )
  }
}

export default LandingPage;

// <DemoFeedItem key={i} item={item} />) }


// <img src={window.iphoneSplashImg}/>
