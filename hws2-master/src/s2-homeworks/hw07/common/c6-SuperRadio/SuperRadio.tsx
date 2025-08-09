// // import React, {
// //     ChangeEvent,
// //     InputHTMLAttributes,
// //     DetailedHTMLProps,
// //     HTMLAttributes,
// // } from 'react'
// // import s from './SuperRadio.module.css'
// //
// // type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>,
// //     HTMLInputElement>
// // // тип пропсов обычного спана
// // type DefaultSpanPropsType = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>,
// //     HTMLSpanElement>
// //
// // type SuperRadioPropsType = Omit<DefaultRadioPropsType, 'type'> & {
// //     options?: any[]
// //     onChangeOption?: (option: any) => void
// //
// //     spanProps?: DefaultSpanPropsType // пропсы для спана
// // }
// //
// // const SuperRadio: React.FC<SuperRadioPropsType> = ({
// //                                                        id,
// //                                                        name,
// //                                                        className,
// //                                                        options,
// //                                                        value,
// //                                                        onChange,
// //                                                        onChangeOption,
// //                                                        spanProps,
// //                                                        ...restProps
// //                                                    }) => {
// //
// //     const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
// //         if (onChangeOption) {
// //             // Находим выбранную опцию по ID
// //             const selectedOption = options?.find(o => String(o.id) === e.currentTarget.value);
// //             if (selectedOption) {
// //                 onChangeOption(selectedOption);
// //             }
// //         }
// //         onChange && onChange(e); // Сохраняем стандартное поведение
// //     };
// //
// //
// //     const finalRadioClassName = s.radio + (className ? ' ' + className : '')
// //     const spanClassName = s.span + (spanProps?.className ? ' ' + spanProps.className : '')
// //
// //     const mappedOptions: any[] = options
// //         ? options.map((o) => (
// //             <label key={name + '-' + o.id} className={s.label}>
// //                 <input
// //                     id={id + '-input-' + o.id}
// //                     className={finalRadioClassName}
// //                     type={'radio'}
// //                     // name, checked, value делают студенты
// //                     name={name || 'grade'}
// //                     checked={String(value) === String(o.id)}
// //                     value={String(o.id)}
// //                     onChange={onChangeCallback}
// //                     {...restProps}
// //                 />
// //                 <span
// //                     id={id + '-span-' + o.id}
// //                     {...spanProps}
// //                     className={spanClassName}
// //                 >
// //                       {o.value}
// //                   </span>
// //             </label>
// //         ))
// //         : []
// //
// //     return <div className={s.options}>{mappedOptions}</div>
// // }
// //
// // export default SuperRadio
//
// import React, {
//     ChangeEvent,
//     InputHTMLAttributes,
//     DetailedHTMLProps,
//     HTMLAttributes,
// } from 'react';
// import s from './SuperRadio.module.css';
//
// type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>,
//     HTMLInputElement>;
// type DefaultSpanPropsType = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>,
//     HTMLSpanElement>;
//
// type OptionType = {
//     id: number | string;
//     value: string;
// };
//
// type SuperRadioPropsType = Omit<DefaultRadioPropsType, 'type'> & {
//     options?: OptionType[];
//     onChangeOption?: (option: OptionType) => void;
//     spanProps?: DefaultSpanPropsType;
// };
//
// const SuperRadio: React.FC<SuperRadioPropsType> = ({
//                                                        id,
//                                                        name,
//                                                        className,
//                                                        options,
//                                                        value,
//                                                        onChange,
//                                                        onChangeOption,
//                                                        spanProps,
//                                                        ...restProps
//                                                    }) => {
//     const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
//         if (!options || !onChangeOption) {
//             onChange?.(e);
//             return;
//         }
//
//         const selectedId = e.currentTarget.value;
//         const selectedOption = options.find(o => String(o.id) === selectedId);
//
//         if (selectedOption) {
//             onChangeOption(selectedOption);
//         }
//         onChange?.(e);
//     };
//
//     const finalRadioClassName = s.radio + (className ? ' ' + className : '');
//     const spanClassName = s.span + (spanProps?.className ? ' ' + spanProps.className : '');
//
//     const mappedOptions = options
//         ? options.map(o => (
//             <label key={name + '-' + o.id} className={s.label}>
//                 <input
//                     id={id + '-input-' + o.id}
//                     className={finalRadioClassName}
//                     type="radio"
//                     name={name || 'grade'}
//                     checked={value !== undefined && String(value) === String(o.id)}
//                     value={String(o.id)}
//                     onChange={onChangeCallback}
//                     {...restProps}
//                 />
//                 <span
//                     id={id + '-span-' + o.id}
//                     {...spanProps}
//                     className={spanClassName}
//                 >
//                       {o.value}
//                   </span>
//             </label>
//         ))
//         : [];
//
//     return <div className={s.options}>{mappedOptions}</div>;
// };
//
// export default SuperRadio;

// import React, {
//     ChangeEvent,
//     InputHTMLAttributes,
//     DetailedHTMLProps,
//     HTMLAttributes,
// } from 'react'
// import s from './SuperRadio.module.css'

import React, {
    ChangeEvent,
    InputHTMLAttributes,
    DetailedHTMLProps,
    HTMLAttributes,
} from 'react'
import s from './SuperRadio.module.css'

type DefaultRadioPropsType = DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
    >
// тип пропсов обычного спана
type DefaultSpanPropsType = DetailedHTMLProps<
    HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
    >

type SuperRadioPropsType = Omit<DefaultRadioPropsType, 'type'> & {
    options?: { id: number, value: string }[]
    onChangeOption?: (option: { id: number, value: string }) => void
    spanProps?: DefaultSpanPropsType
}

const SuperRadio: React.FC<SuperRadioPropsType> = ({
                                                       id,
                                                       name,
                                                       className,
                                                       options,
                                                       value,
                                                       onChange,
                                                       onChangeOption,
                                                       spanProps,
                                                       ...restProps
                                                   }) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        const selectedId = Number(e.currentTarget.value)
        const selectedOption = options?.find(o => o.id === selectedId)
        selectedOption && onChangeOption?.(selectedOption)
        onChange?.(e)
    }
    
    const mappedOptions = options?.map(o => (
        <label key={name + '-' + o.id} className={s.label}>
            <input
                id={id + '-input-' + o.id}
                className={s.radio + (className ? ' ' + className : '')}
                type={'radio'}
                name={name}
                checked={value === o.id}
                value={o.id}
                onChange={onChangeCallback}
                {...restProps}
            />
            <span
                id={id + '-span-' + o.id}
                {...spanProps}
                className={s.span + (spanProps?.className ? ' ' + spanProps.className : '')}
            >
                {o.value}
            </span>
        </label>
    )) || []
    
    return <div className={s.options}>{mappedOptions}</div>
}

export default SuperRadio