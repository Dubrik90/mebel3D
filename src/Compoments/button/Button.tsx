import {
    ComponentPropsWithoutRef,
    ElementRef,
    ElementType,
    ForwardedRef,
    ReactElement,
    forwardRef,
} from 'react'

//import { ArrowBack } from '../../assets/icons'
import { clsx } from 'clsx'

import s from './button.module.scss'

export type ButtonVariant = 'back' | 'outlined' | 'primary' | 'secondary'

type InferType<T> = T extends ElementType<infer U> ? U : never

export type ButtonProps<T extends ElementType = 'button'> = {
    as?: T
    fullWidth?: boolean
    variant?: ButtonVariant
} & ComponentPropsWithoutRef<T>

/** Accepts all props of the native button element. */
const Button = forwardRef(
    <T extends ElementType = 'button'>(props: ButtonProps<T>, ref: ForwardedRef<InferType<T>>) => {
        const {
            as: Component = 'button',
            children,
            className,
            fullWidth = false,
            variant = 'primary',
            ...rest
        } = props
        const classNames = {
            root: clsx(s[variant], fullWidth && s.fullWidth, className),
        }

        return (
            <Component className={classNames.root} ref={ref} {...rest}>
                {variant === 'back'
                  //  &&
                  //  <ArrowBack size={16} />
                }
                {children}
            </Component>
        )
    }
)

/** Accepts all props of the native button element. */
export default Button as <T extends ElementType = 'button'>(
    props: ButtonProps<T> & {
        ref?: ForwardedRef<ElementRef<T>>
    }
) => ReactElement
