import React from 'react';
import './index.scss';


class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      leftOpen: true,
      rightOpen: true,
    }
  }

  toggleLeft = () => {
    this.setState({ leftOpen: !this.state.leftOpen });
  }

  toggleRight = () => {
    this.setState({ rightOpen: !this.state.rightOpen });
  }

  render() {
    let leftOpen = this.state.leftOpen ? 'left-open' : 'left-closed';
    let rightOpen = this.state.rightOpen ? 'right-open' : 'right-closed';

    return (
      <div
        id='layout'
        className={`${leftOpen} ${rightOpen}`}
      >

          <div id='main'>
              <div className='header'>
                  Main header
              </div>
              <div className='content'>
                  Main content
              </div>
          </div>

          <div id='leftside' className={leftOpen} >
              <div className='icon'
                   onClick={this.toggleLeft} >
                   &equiv;
              </div>
              <div className='sidebar'>
                  <div className='header'>
                      Left header
                  </div>
                  <div className='content'>
                      Left content
                  </div>
              </div>
          </div>

          <div id='rightside' className={rightOpen} >
              <div className='icon'
                   onClick={this.toggleRight} >
                   &equiv;
              </div>
              <div className='sidebar'>
                  <div className='header'>
                      Right header
                  </div>
                  <div className='content'>
                      Right content
                  </div>
              </div>
          </div>

      </div>
    );
  }
}

export default Layout;