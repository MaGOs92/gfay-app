import React from 'react';
import styles from './AboutHeader.module.scss';
import profilePicture from '../../../public/images/profile_picture.jpg';

export function AboutHeader() {
  return (
    <div className={styles.container}>
      <div>
        <h2>Guillaume Fay</h2>
        <h4>Software engineer</h4>
      </div>
      {/* eslint-disable @next/next/no-img-element */}
      <img src={profilePicture.src} alt="Guillaume Fay" />
    </div>
  );
}
