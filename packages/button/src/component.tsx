/* eslint-disable jsx-a11y/anchor-has-content */

import * as React from 'react';
import { classNames } from '@chbphone55/classnames';
import type { ButtonProps } from './props.js';

const setup = (props) => ({
  attrs: {
    ...props,
    primary: undefined,
    secondary: undefined,
    negative: undefined,
    quiet: undefined,
    utility: undefined,
    small: undefined,
    link: undefined,
    pill: undefined,
    loading: undefined,
    className: undefined,
    type: props.href ? undefined : props.type || 'button',
  },
  classes: classNames({
    button: !props.href,
    // primary buttons
    'button--primary': props.primary,
    'button--destructive': props.negative,
    // quiet
    'button--flat': props.secondary && props.quiet,
    'button--destructive-flat': props.negative && props.quiet,
    'button--utility-flat': props.utility && props.quiet,
    // others
    'button--small': props.small,
    'button--utility': props.utility && !props.quiet,
    'button--link': props.link,
    'button--pill': props.pill,
    'button--in-progress': props.loading,
    [props.className]: !!props.className,
  }),
});

export const Button = React.forwardRef(
  (
    props: ButtonProps,
    ref: React.Ref<HTMLButtonElement> | React.Ref<HTMLAnchorElement>,
  ) => {
    const { attrs, classes } = setup(props);
    return (
      <>
        {attrs.href ? (
          <a {...attrs} ref={ref} className={classes} />
        ) : (
          <button {...attrs} ref={ref} className={classes} />
        )}
        {props.loading ? (
          <span
            className="sr-only"
            role="progressbar"
            aria-valuenow={0}
            aria-valuetext="Laster..."
          />
        ) : null}
      </>
    );
  },
);
