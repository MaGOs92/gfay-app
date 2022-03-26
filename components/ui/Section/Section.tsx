import React from 'react';
import styles from './Section.module.scss';

interface IProps {
  title: string;
  content: string | React.ReactNode;
}

export function Section({ title, content }: IProps) {
  return (
    <section className={styles.container}>
      <h3>{title}</h3>
      <div>{content}</div>
    </section>
  );
}
