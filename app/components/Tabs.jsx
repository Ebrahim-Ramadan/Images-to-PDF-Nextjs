import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import './Tabs.css';
import { AccordionDemo } from './DownloadHistory';
import { MainFunc } from './ImageConvert/MainFunc'


export const ContentTabs = () => {
  const visitMe = () => {
  window.open('https://github.com/Ebrahim-Ramadan')
}
  return (
    <div className='ContentTabs'>
      <Tabs.Root className="TabsRoot" defaultValue="tab1">
      <Tabs.List className="TabsList" aria-label="Manage your account">
      <Tabs.Trigger className="TabsTrigger" value="tab1">
        Upload
      </Tabs.Trigger>
      <Tabs.Trigger className="TabsTrigger" value="tab2">
        Me
      </Tabs.Trigger>
    </Tabs.List>
        <Tabs.Content className="TabsContent" value="tab1">
        <MainFunc/>




        </Tabs.Content>
        
    <Tabs.Content className="TabsContent" value="tab2">
          
          
      <AccordionDemo/>
      <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }} >
        <button className="Button green" onClick={visitMe}>Source Code</button>
      </div>
    </Tabs.Content>
      </Tabs.Root>
      </div>
      
    )
};

