import React from 'react';
import './index.scss';


class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      leftActive: true,
      rightActive: true,
    }
  }

  toggleLeft = () => {
    this.setState({ leftActive: !this.state.leftActive });
  }

  toggleRight = () => {
    this.setState({ rightActive: !this.state.rightActive });
  }

  render() {
    let leftActive = this.state.leftActive ? 'leftActive' : 'leftPassive';
    let rightActive = this.state.rightActive ? 'rightActive' : 'rightPassive';

    return (
      <div
        id='layout'
        className={`${leftActive} ${rightActive}`}
      >
          <div id='left' className={leftActive} >
              <div className='header'>
                  <div
                    className='icon'
                    onClick={this.toggleLeft}
                  >
                    L
                  </div>
                  <div className='title'>
                    Left header
                  </div>
              </div>
              <div className='content'>
                  Left content
              </div>
          </div>

          <div id='main'>
              <div className='header'>
                  <div className='title'>
                    Main header
                  </div>
              </div>
              <div className='content'>
                  Main content
              </div>
          </div>

          <div id='right' className={rightActive} >
              <div className='header'>
                  <div
                    className='icon'
                    onClick={this.toggleRight}
                  >
                    R
                  </div>
                  <div className='title'>
                    Right header
                  </div>
              </div>
              <div className='content'>
                  Right content
              </div>
          </div>
      </div>
    );
  }
}

export default Layout;