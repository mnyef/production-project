import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ListBox } from 'shared/UI/ListBox/ListBox';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
}

const options = [
    { value: Country.Latvia, content: Country.Latvia },
    { value: Country.Sweden, content: Country.Sweden },
    { value: Country.Finland, content: Country.Finland },
    { value: Country.Scotland, content: Country.Scotland },
    { value: Country.Germany, content: Country.Germany },
];

export const CountrySelect = memo(
    ({
        className, value, onChange, readonly,
    }: CountrySelectProps) => {
        const { t } = useTranslation();

        const onChangeHandler = useCallback(
            (value: string) => {
                onChange?.(value as Country);
            },
            [onChange],
        );

        return (
            <ListBox
                onChange={onChangeHandler}
                value={value}
                defaultValue={t('Укажите страну')}
                label={t('Укажите страну')}
                items={options}
                readonly={readonly}
                direction="top right"
            />
        );
    },
);
