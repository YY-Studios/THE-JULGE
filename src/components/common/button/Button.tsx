import clsx from 'clsx';
import Link from 'next/link';
import { ComponentPropsWithoutRef } from 'react';

import {
  BUTTON_BASE,
  BUTTON_VARIANTS,
  BUTTON_SIZES,
  ButtonVariant,
  ButtonSize,
} from './buttonVariants';

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

interface ButtonAsButton
  extends BaseButtonProps,
    ComponentPropsWithoutRef<'button'> {
  as?: 'button';
  href?: never;
  type?: 'button' | 'submit';
}

interface ButtonAsLink extends BaseButtonProps, ComponentPropsWithoutRef<'a'> {
  as?: 'link';
  href: string;
  type?: never;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  as = 'button',
  type = 'button',
  ...props
}: ButtonProps) => {
  const buttonClassName = clsx(
    BUTTON_BASE,
    BUTTON_VARIANTS[variant],
    BUTTON_SIZES[size],
    className
  );

  if (as === 'link') {
    const { href, ...linkProps } = props as ButtonAsLink;
    return (
      <Link href={href} className={buttonClassName} {...linkProps}>
        {children}
      </Link>
    );
  }
  return (
    <button
      className={buttonClassName}
      type={type}
      disabled={variant === 'disabled' ? true : false}
      {...(props as ButtonAsButton)}
    >
      {children}
    </button>
  );
};

export default Button;
