import React from 'react';
import './index.scss';


export default () =>
  <div id='layout'>
      <div id='left'>
          <div className='header'>
              <div className='icon'>
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
      <div id='right'>
          <div className='header'>
              <div className='icon'>
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
