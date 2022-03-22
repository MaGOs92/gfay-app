import React from 'react';
import styles from './LinkButton.module.css';

interface IProps extends React.HTMLProps<HTMLAnchorElement> {
  label: string;
  icon?: string;
}

export function LinkButton({ icon, label, ...props }: IProps) {
  return (
    <a className={styles.button} {...props}>
      {icon && <img src={icon} alt="social media logo" />}
      {label}
    </a>
  );
}
