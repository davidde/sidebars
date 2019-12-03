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

  toggleSidebar = (event) => {
    let key = `${event.currentTarget.parentNode.id}Open`;
    this.setState({ [key]: !this.state[key] });
  }

  render() {
    let leftOpen = this.state.leftOpen ? 'open' : 'closed';
    let rightOpen = this.state.rightOpen ? 'open' : 'closed';

    return (
      <div id='layout'>

          <div id='left' className={leftOpen} >
              <div className='icon'
                   onClick={this.toggleSidebar} >
                   &equiv;
              </div>
              <div className={`sidebar ${leftOpen}`} >
                  <div className='header'>
                    <h3 className='title'>
                      Left header
                    </h3>
                  </div>
                  <div className='content'>
                      <h3>Left content</h3>
                      <p>
                        Aenean ut felis finibus, aliquet mi a, feugiat felis. Donec porta, odio et vulputate laoreet, nibh odio iaculis mi, et ornare nulla orci vitae ligula. Sed mi velit, aliquam sit amet efficitur eget, scelerisque vel ligula. Aliquam finibus erat nec accumsan posuere. Vestibulum rhoncus, velit vitae volutpat vehicula, leo orci faucibus eros, at ornare nibh nunc nec mi. Donec porttitor ultricies mauris quis euismod. Praesent sem libero, venenatis ut ornare eget, volutpat tincidunt lacus. Pellentesque aliquam turpis et mauris consectetur, quis condimentum nunc dignissim. Cras lectus libero, pellentesque non malesuada at, condimentum nec ex. Nam sed accumsan enim. Donec eros massa, malesuada quis nulla elementum, imperdiet condimentum orci. Integer non velit et nulla vestibulum vestibulum. Proin vehicula tristique libero, eu tincidunt erat cursus ac. Ut malesuada ante ut est dictum, ornare varius arcu aliquet. Quisque vitae libero eget orci tristique aliquam id sit amet nunc.
                      </p>
                  </div>
              </div>
          </div>

          <div id='main'>
              <div className='header'>
                  <h3 className={`
                      title
                      ${'left-' + leftOpen}
                      ${'right-' + rightOpen}
                  `}>
                      Main header
                  </h3>
              </div>
              <div className='content'>
                  <h3>Main content</h3><br/>
                  <p>
                    Nam accumsan eleifend metus at imperdiet. Mauris pellentesque ipsum nisi, et fringilla leo blandit sed. In tempor, leo sit amet fringilla imperdiet, ipsum enim sagittis sem, non molestie nisi purus consequat sapien. Proin at velit id elit tincidunt iaculis ac ac libero. Vivamus vitae tincidunt ex. Duis sit amet lacinia massa. Quisque lobortis tincidunt metus ut commodo. Sed euismod quam gravida condimentum commodo.
                  </p><br/>
                  <p>
                    Vivamus tincidunt risus ut sapien tincidunt, ac fermentum libero dapibus. Duis accumsan enim ac magna tempor, vestibulum euismod nisl pharetra. Ut dictum lacus eu venenatis vestibulum. Vestibulum euismod at arcu ac blandit. Curabitur eu imperdiet magna. Duis bibendum efficitur diam, eget placerat nunc imperdiet eget. Morbi porta at leo sed porta. Nullam eleifend eleifend quam eget dictum.
                  </p><br/>
                  <p>
                    Sed nulla erat, lacinia sit amet dui at, cursus blandit neque. In ultricies, dui a laoreet dignissim, risus mi cursus risus, at luctus sem arcu non tortor. In hac habitasse platea dictumst. Etiam ut vulputate augue. Aenean efficitur commodo ipsum, in aliquet arcu blandit non. Praesent sed tempus dui, non eleifend nisi. Proin non finibus diam, quis finibus ante. Fusce aliquam faucibus mauris, id consequat velit ultricies at. Aliquam neque erat, fermentum non aliquam id, mattis nec justo. Nullam eget suscipit lectus.
                  </p>
              </div>
          </div>

          <div id='right' className={rightOpen} >
              <div className='icon'
                   onClick={this.toggleSidebar} >
                   &equiv;
              </div>
              <div className={`sidebar ${rightOpen}`} >
                  <div className='header'>
                    <h3 className='title'>
                      Right header
                    </h3>
                  </div>
                  <div className='content'>
                      <h3>Right content</h3><br/>
                      <p>
                        Mauris velit turpis, scelerisque at velit sed, porta varius tellus. Donec mollis faucibus arcu id luctus. Etiam sit amet sem orci. Integer accumsan enim id sem aliquam sollicitudin. Etiam sit amet lorem risus. Aliquam pellentesque vestibulum hendrerit. Pellentesque dui mauris, volutpat vel sapien vitae, iaculis venenatis odio. Donec vel metus et purus ullamcorper consequat. Mauris at ullamcorper quam, sed vehicula felis. Vestibulum fringilla, lacus sit amet finibus imperdiet, tellus massa pretium urna, non lacinia dui nibh ut enim. Nullam vestibulum bibendum purus convallis vehicula. Morbi tempor a ipsum mattis pellentesque. Nulla non libero vel enim accumsan luctus.
                      </p>
                  </div>
              </div>
          </div>

      </div>
    );
  }
}

export default Layout;