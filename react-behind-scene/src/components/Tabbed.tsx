import * as React from 'react';
import { Content } from '../types';
import Tab from './Tab';
import { useState } from 'react';
import TabContent from './TabContent';
import DifferentContent from './DifferentContent';

export interface ITabbedProps {
    content : Content[]
}

export function Tabbed ({content}: ITabbedProps) {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div>
      <div className="tabs">
        <Tab num={0} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={1} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={2} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={3} activeTab={activeTab} onClick={setActiveTab} />
      </div>

      {activeTab <= 2 ? (
        <TabContent item={content.at(activeTab)!} />
      ) : (
        <DifferentContent />
      )}
    </div>
  );
}
