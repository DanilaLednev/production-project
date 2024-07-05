import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { Select } from 'shared/ui/Select/Select';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
  className?: string
  value?: Currency;
  onChange?: (value: Currency) => void;
  readOnly?: boolean;
}

const options = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.USD, content: Currency.USD },
  { value: Currency.EUR, content: Currency.EUR },
];

export const CurrencySelect = memo((props: CurrencySelectProps) => {
  const {
    className,
    value,
    onChange,
    readOnly,
  } = props;

  const { t } = useTranslation();

  const onChangeHandler = useCallback((value:string) => {
    onChange?.(value as Currency);
  }, [onChange]);

  return (

    <ListBox
      className={className}
      value={value}
      defaultValue={t('Укажите валюту')}
      label={t('Укажите валюту')}
      items={options}
      onChange={onChangeHandler}
      readonly={readOnly}
      direction="top right"
    />

  // <Select
  //   className={classNames('', {}, [className])}
  //   label={t('Укажите валюту')}
  //   options={options}
  //   value={value}
  //   readOnly={readOnly}
  //   onChange={onChangeHandler}
  // />

  );
});
