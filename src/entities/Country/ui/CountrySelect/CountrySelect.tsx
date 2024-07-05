import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { Select } from 'shared/ui/Select/Select';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
  className?: string
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
  const {
    className,
    value,
    onChange,
    readOnly,
  } = props;

  const { t } = useTranslation();

  const onChangeHandler = useCallback((value:string) => {
    onChange?.(value as Country);
  }, [onChange]);

  const options = useMemo(() => Object.entries(Country).map((val) => ({ value: val[0], content: val[1] })), []);

  return (

    <ListBox
      onChange={onChangeHandler}
      value={value}
      defaultValue={t('Укажите страну')}
      label={t('Укажите страну')}
      items={options}
      readonly={readOnly}
      direction="top"
    />

  // <Select
  //   className={classNames('', {}, [className])}
  //   label={t('Укажите страну')}
  //   options={options}
  //   value={value}
  //   readOnly={readOnly}
  //   onChange={onChangeHandler}
  // />

  );
});
