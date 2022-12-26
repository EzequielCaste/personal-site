import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {
  faCss3Alt,
  faGit,
  faGithub,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faNpm,
  faReact,
  faSass,
  faWindows,
  faUbuntu
} from '@fortawesome/free-brands-svg-icons';

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

        <li className={styles.listItem}>
          <FontAwesomeIcon size="2x" className="" icon={faReact} />
          <div className={styles.listDesc}>react</div>
        </li>
        <li className={styles.listItem}>
          <FontAwesomeIcon size="2x" className="" icon={faNodeJs} />
          <div className={styles.listDesc}>node.js</div>
        </li>
        <li className={styles.listItem}>
          <FontAwesomeIcon size="2x" className="" icon={faJsSquare} />
          <div className={styles.listDesc}>javascript</div>
        </li>
        <li className={styles.listItem}>
          <i className="svg-inline--fa fa-square-js fa-2x  devicon-graphql-plain"></i>
          <div className={styles.listDesc}>graphql</div>
        </li>
        <li className={styles.listItem}>
          <i className="svg-inline--fa fa-square-js fa-2x devicon-jest-plain"></i>
          <div className={styles.listDesc}>jest</div>
        </li>
        <li className={styles.listItem}>
          <i className="svg-inline--fa fa-square-js fa-2x devicon-materialui-plain"></i>
          <div className={styles.listDesc}>material ui</div>
        </li>
        <li className={styles.listItem}>
          <i className="svg-inline--fa fa-square-js fa-2x devicon-mongodb-plain"></i>
          <div className={styles.listDesc}>mongodb</div>
        </li>
        <li className={styles.listItem}>
          <FontAwesomeIcon size="2x" className="" icon={faHtml5} />
          <div className={styles.listDesc}>html5</div>
        </li>
        <li className={styles.listItem}>
          <FontAwesomeIcon size="2x" className="" icon={faCss3Alt} />
          <div className={styles.listDesc}>css3</div>
        </li>
        <li className={styles.listItem}>
          <FontAwesomeIcon size="2x" className="" icon={faSass} />
          <div className={styles.listDesc}>sass</div>
        </li>
        <li className={styles.listItem}>
          <FontAwesomeIcon size="2x" className="" icon={faNpm} />
          <div className={styles.listDesc}>npm</div>
        </li>
        <li className={styles.listItem}>
          <FontAwesomeIcon size="2x" className="" icon={faGit} />
          <div className={styles.listDesc}>git</div>
        </li>
        <li className={styles.listItem}>
          <FontAwesomeIcon size="2x" className="" icon={faGithub} />
          <div className={styles.listDesc}>github</div>
        </li>
        <li className={styles.listItem}>
          <FontAwesomeIcon size="2x" className="" icon={faWindows} />
          <div className={styles.listDesc}>windows</div>
        </li>
        <li className={styles.listItem}>
          <FontAwesomeIcon size="2x" className="" icon={faUbuntu} />
          <div className={styles.listDesc}>Ubuntu</div>
        </li>
      </ul>
    </div>
  );
};
