import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import s from './SuperButton.module.css'

// тип пропсов обычной кнопки
type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

type SuperButtonPropsType = DefaultButtonPropsType & {
  xType?: string
}

const SuperButton: React.FC<SuperButtonPropsType> = ({
                                                       xType,
                                                       className,
                                                       disabled,
                                                       ...restProps
                                                     }) => {
  // определяем какой класс по типу кнопки
  const typeClass = disabled
    ? s.disabled
    : xType === 'red'
      ? s.red
      : xType === 'secondary'
        ? s.secondary
        : s.default // если xType не задан, ставим default

  const finalClassName = [s.button, typeClass, className]
    .filter(Boolean)
    .join(' ')

  return (
    <button disabled={disabled} className={finalClassName} {...restProps} />
  )
}

export default SuperButton
