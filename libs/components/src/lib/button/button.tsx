




  import styles from './button.module.css';
  

/* eslint-disable-next-line */
export interface ButtonProps {
}



export function Button(props: ButtonProps) {
  return (
    <button className={styles["button"]}>Click me!</button>
  );
};


export default Button;
