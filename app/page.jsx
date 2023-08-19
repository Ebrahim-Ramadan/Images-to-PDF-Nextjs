'use client'

import '@radix-ui/colors/black-alpha.css';
import '@radix-ui/colors/violet.css';

import Link from 'next/link'
import React from 'react';
import useStore from './store/store';
import { WhoMe } from './components/WhoMe';
import { ContentTabs } from './components/Tabs';

function UserProfile() {
  // const counter = useStore((state) => state.counter);
  // const username = useStore((state) => state.username);

  return (
    <div style={{ backgroundColor: '#FAF6FF', height:'100vh'}}>
      <div style={{backgroundColor:'#A7B9CA', padding:'10px', borderRadius:'5px'}}>
      <WhoMe />
    </div>

      <ContentTabs/>
    </div>
    
  );
}

export default UserProfile;