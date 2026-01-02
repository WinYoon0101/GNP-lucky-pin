export interface Prize {
  id: string;
  label: string;
  subLabel?: string;
  color: string;
  textColor?: string;
  icon?: React.ReactNode;
  isGrandPrize?: boolean;
}

export interface Offer {
  id: string;
  title: string;
  description: string;
  subDescription?: string;
  discount: string;
  colorTheme: 'orange' | 'blue';
}