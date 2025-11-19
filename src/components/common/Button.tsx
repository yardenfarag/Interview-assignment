import type { ReactNode } from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
}

export default function Button({
  children,
  variant = 'primary',
  onClick,
  className = '',
}: ButtonProps) {
  const buttonClass = `${styles.button} ${styles[`button-${variant}`]} ${className}`.trim();

  return (
    <button
      className={buttonClass}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

