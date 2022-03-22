import React from 'react';
import styles from './LinkButton.module.css';

interface IProps extends React.HTMLProps<HTMLAnchorElement> {
  label: string;
  icon?: string;
}

export function LinkButton({ icon, label, ...props }: IProps) {
  return (
    <a className={styles.button} {...props}>
      {/* eslint-disable @next/next/no-img-element */}
      {icon && <img src={icon} alt="social media logo" />}
      {label}
    </a>
  );
}
