'use client'
import React from 'react';
import * as Separator from '@radix-ui/react-separator';
import './WhoMe.css'

export const WhoMe = () => {
  return (
    <div style={{maxWidth: 450, margin: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', }}>
    <div className="Text"  style={{ textAlign: 'center', fontSize:'17px' }}>
      Ebrahim Ramadan
    </div>
    <div className="Text ">Front-end Developer | full stack (same thing)</div>
    <Separator.Root className="SeparatorRoot" style={{ margin: '15px 0' }} />
    <div style={{ display: 'flex', height: 20, alignItems: 'center' }}>
        <div className="Text">
          <a href='https://github.com/Ebrahim-Ramadan' target='_blank'>Github</a>
          
      </div>
      <Separator.Root
        className="SeparatorRoot"
        decorative
        orientation="vertical"
        style={{ margin: '0 15px' }}
      />
        <div className="Text">
          <a href='https://www.linkedin.com/in/ebrahim-ramadan-a9a9991a6/' target='_blank'>LinkedIn</a>
        </div>
      <Separator.Root
        className="SeparatorRoot"
        decorative
        orientation="vertical"
        style={{ margin: '0 15px' }}
      />
        <div className="Text">
          <a href='https://twitter.com/scoopsahoykid' target='_blank'>Twitter</a>
          </div>
    </div>
  </div>
  )
};

//  default WhoMe;