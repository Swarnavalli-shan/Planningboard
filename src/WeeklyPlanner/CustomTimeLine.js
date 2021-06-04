import Timeline from 'react-calendar-timeline'
// make sure you include the timeline stylesheet or the timeline will not be styled
import 'react-calendar-timeline/lib/Timeline.css'
import moment from 'moment';
import React, { useState } from 'react';
import {transformGroup, transformItem} from './data/transform';
import rows from './data/line';
import items from './data/smartOrder';


const CustomTimeline = () => {

  const [groups, setGroups] = useState(transformGroup(rows));

  const [itemss, setItems] = useState(transformItem(items));

  const handleItemMove = (itemId, dragTime, newGroupOrder) => {

    const group = groups[newGroupOrder];

    const modifiedItems = itemss.map(item =>
      item.id === itemId
        ? Object.assign({}, item, {
          start_time: dragTime,
          end_time: dragTime + (item['end_time'] - item['start_time']),
          group: group.id
        })
        : item
    );

    setItems(modifiedItems);

    console.log("Moved", itemId, dragTime, newGroupOrder);
  };

  return <Timeline
    groups={groups}
    items={itemss}
    onItemMove={handleItemMove}
    defaultTimeStart={moment()}
    stackItems = {true}
    defaultTimeEnd={moment().add(1, 'month')}
  />
}

export default CustomTimeline;