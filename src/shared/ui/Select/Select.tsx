import { ChangeEvent, memo, useMemo } from 'react';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';

import cls from './Select.module.scss';

export interface SelectOption<T extends string> {
  value: T;
  content: string;
}

interface SelectProps<T extends string> {
  className?: string;
  label?: string;
  options?: SelectOption<T>[];
  value?: T;
  onChange?: (value: T) => void;
  readOnly?: boolean;
}

export const typedMemo: <T>(c: T) => T = memo;

export const Select = typedMemo(<T extends string>(props: SelectProps<T>) => {
  const { className, label, options, value, readOnly, onChange } = props;

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange?.(e.target.value as T);
    }
  };

  const mods: Mods = {};
  const optionsList = useMemo(
    () =>
      options?.map((opt) => (
        <option key={opt.value} className={cls.option} value={opt.value}>
          {opt.content}
        </option>
      )),
    [options],
  );

  return (
    <div className={classNames(cls.Wrapper, mods, [className])}>
      {label && <span className={cls.label}>{`${label}>`}</span>}
      <select
        disabled={readOnly}
        className={cls.select}
        value={value}
        onChange={onChangeHandler}
      >
        {optionsList}
      </select>
    </div>
  );
});
