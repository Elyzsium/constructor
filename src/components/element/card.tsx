import { CardProps } from '@/types';
import classNames from 'classnames';

const Card = ({ children, className, ...props }:CardProps) => {
  return (
    <div {...props} className={classNames('bg-white rounded-lg p-4', className)}>
      {children}
    </div>
  )
}

export default Card;