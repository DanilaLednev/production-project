import React, {
  InputHTMLAttributes,
  memo,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';

import cls from './Input.module.scss';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readOnly'
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  autoFocus?: boolean;
  readOnly?: boolean;
  addonLeft?: ReactNode;
  addonRight?: ReactNode;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autoFocus,
    readOnly,
    addonLeft,
    addonRight,
    ...otherProps
  } = props;

  const ref = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (autoFocus) {
      setIsFocused(true);
      ref.current?.focus();
    }
  }, [autoFocus, isFocused]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const mods: Mods = {
    [cls.readOnly]: readOnly,
    [cls.focused]: isFocused,
    [cls.withAddonLeft]: Boolean(addonLeft),
    [cls.withAddonRight]: Boolean(addonRight),
  };

  return (
    <div className={classNames(cls.InputWrapper, mods, [className])}>
      <div className={cls.addonLeft}>{addonLeft}</div>
      <input
        ref={ref}
        className={cls.input}
        type={type}
        value={value}
        onChange={onChangeHandler}
        onFocus={onFocus}
        onBlur={onBlur}
        readOnly={readOnly}
        placeholder={placeholder}
        {...otherProps}
      />
      <div className={cls.addonRight}>{addonRight}</div>
    </div>
  );
});
