import React, {
    SelectHTMLAttributes,
    DetailedHTMLProps,
    ChangeEvent,
} from 'react'
import s from './SuperSelect.module.css'

type DefaultSelectPropsType = DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
    >

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: { id: number, value: string }[]
    onChangeOption?: (option: { id: number, value: string }) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = ({
                                                         options,
                                                         className,
                                                         onChange,
                                                         onChangeOption,
                                                         value,
                                                         ...restProps
                                                     }) => {
    const mappedOptions = options?.map((o) => (
        <option
            id={'hw7-option-' + o.id}
            className={s.option}
            key={o.id}
            value={o.id}
        >
            {o.value}
        </option>
    )) || []
    
    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        const selectedId = Number(e.target.value)
        const selectedOption = options?.find(o => o.id === selectedId)
        selectedOption && onChangeOption?.(selectedOption)
        onChange?.(e)
    }
    
    return (
        <select
            className={s.select + (className ? ' ' + className : '')}
            value={value}
            onChange={onChangeCallback}
            {...restProps}
        >
            {mappedOptions}
        </select>
    )
}

export default SuperSelect