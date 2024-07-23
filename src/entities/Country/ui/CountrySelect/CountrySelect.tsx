import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { Country } from '../../model/types/country';

import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { ListBox } from '@/shared/ui/redesigned/Popups';

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readOnly?: boolean;
}

// const options = [
//   { value: Country.Russia, content: Country.Russia },
//   { value: Country.Belarus, content: Country.Belarus },
//   { value: Country.Ukraine, content: Country.Ukraine },
//   { value: Country.Kazakhstan, content: Country.Kazakhstan },
//   { value: Country.Armenia, content: Country.Armenia },
// ];

export const CountrySelect = memo((props: CountrySelectProps) => {
  const { className, value, onChange, readOnly } = props;

  const { t } = useTranslation();

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Country);
    },
    [onChange],
  );

  const options = useMemo(
    () =>
      Object.entries(Country).map((val) => ({
        value: val[0],
        content: val[1],
      })),
    [],
  );

  const items = {
    onChange: onChangeHandler,
    value,
    defaultValue: t('Укажите страну'),
    label: t('Укажите страну'),
    items: options,
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
