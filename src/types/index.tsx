import { ComponentType, ReactNode } from 'react';
import { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import { IconType } from 'react-icons';

export interface CardProps {
  children: ReactNode;
  className?: string;
}


export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string
  kind?: 'rounded' | 'default'
  isLoading?: boolean
}

export type ButtonComponentProps = PropsWithChildren<ButtonProps>

export interface CategoryCardProps {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    label: string;
  }

export interface CategoryItem {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    label: string;
  }


  export interface OfferCardProps {
    image: string;
    title: string;
    discount: string;
    icon?: IconType | null; 
    iconBg: string;
}



export interface BrandDataProps {
  name: string;
  logo: string | IconType;
  type: 'image' | 'icon';
}
  
export interface CardData {
  id: string;
  color: string;
  type: string;
  balance: string;
  icon: IconType; 
}

  