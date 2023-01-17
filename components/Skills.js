import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { skills } from '@lib/links-data'

export const Skills = () => {
  const styles = {
    listItem: `list-none flex flex-col items-center hover:text-gray-50`,
    listDesc: `text-xs my-0.5 uppercase text-center`,
  };
  return (
    <div
      id="skills"
      className="bg-gray-600 text-gray-200 text-base h-auto p-5 sm:p-14 mx-auto pb-14 sm:text-xl lg:text-3xl space-y-6"
    >
      <h2 className="my-14 text-center font-bold text-4xl">Skills</h2>
      <ul className="grid grid-cols-3 p-4 items-center gap-4 md:gap-5 md:max-w-4xl md:mx-auto">
        {
          skills.map(item => (
            <li key={item.name} className={styles.listItem}>
              {
                item.icon 
                  ? <FontAwesomeIcon size="2x" className={item.class} icon={item.icon} /> 
                  : <i className={`svg-inline--fa fa-square-js fa-2x  ${item.class}`}></i>
              }
              <div className={styles.listDesc}>{item.name}</div>
            </li>
          ))
        }
      </ul>
    </div>
  );
};
