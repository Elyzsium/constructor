import classNames from 'classnames'
import { ButtonComponentProps } from '@/types'
import { RiLoader2Fill } from 'react-icons/ri'

const Button = ({
  text,
  children,
  kind = 'default',
  isLoading,
  className,
  ...props
}: ButtonComponentProps) => {
  return (
    <button
      {...props}
      type={props.type ?? 'button'}
      className={classNames(
        'px-4 py-2 rounded-full text-sm self-start', 
        'bg-orange-500 text-white', 
        'rounded-full border-none text-base font-medium font-inter', 
        'cursor-pointer transition-colors duration-250 capitalize', 
        'flex items-center justify-center', 
        'active:bg-orange-500 disabled:bg-gray-300', 
        {
          'rounded-full': kind === 'rounded',
          'pointer-events-none': isLoading,
        },
        className
      )}
      onClick={isLoading ? undefined : props.onClick}
    >
      {isLoading && (
        <RiLoader2Fill className="w-[18px] h-[18px] mr-[10px] text-current" />
      )}
      {text || children}
    </button>
  )
}

export default Button