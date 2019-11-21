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
    let leftOpen = this.state.leftOpen ? 'open' : 'closed';
    let rightOpen = this.state.rightOpen ? 'open' : 'closed';

    return (
      <div id='layout'>

          <div id='main'>
              <div className={`
                  header
                  ${'left-' + leftOpen}
                  ${'right-' + rightOpen}
              `}>
                  Main header
              </div>
              <div className='content'>
                  Main content
              </div>
          </div>

          <div id='left' className={leftOpen} >
              <div className='icon'
                   onClick={this.toggleLeft} >
                   &equiv;
              </div>
              <div className={`sidebar ${leftOpen}`} >
                  <div className='header'>
                      Left header
                  </div>
                  <div className='content'>
                      Left content
                  </div>
              </div>
          </div>

          <div id='right' className={rightOpen} >
              <div className='icon'
                   onClick={this.toggleRight} >
                   &equiv;
              </div>
              <div className={`sidebar ${rightOpen}`} >
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