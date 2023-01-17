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
      <ul className="grid grid-flow-col-dense sm:grid-flow-row sm:grid-cols-4 grid-rows-4 gap-4 lg:w-2/3 lg:mx-auto">
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
