import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { Currency } from '../../model/types/currency';

import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { ListBox } from '@/shared/ui/redesigned/Popups';

interface CurrencySelectProps {
  className?: string;
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
  const { className, value, onChange, readOnly } = props;

  const { t } = useTranslation();

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Currency);
    },
    [onChange],
  );

  const items = {
    className,
    value,
    defaultValue: t('Укажите валюту'),
    label: t('Укажите валюту'),
    items: options,
    onChange: onChangeHandler,
    readonly: readOnly,
    direction: 'top right' as const,
  };

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={<ListBox {...items} />}
      off={<ListBoxDeprecated {...items} />}
    />
  );
});
