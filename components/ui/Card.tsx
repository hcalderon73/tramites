interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  hover?: boolean;
  bordered?: boolean;
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
}

const Card = ({ 
  children, 
  className = '', 
  padding = 'md',
  hover = false,
  bordered = true,
  shadow = 'md'
}: CardProps) => {
  const baseStyles = 'rounded-xl overflow-hidden';
  
  const paddings = {
    none: '',
    sm: 'p-3',
    md: 'p-5',
    lg: 'p-6',
    xl: 'p-8',
  };
  
  const shadows = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
  };
  
  const borderStyles = bordered ? 'border border-gray-200 dark:border-gray-700' : '';
  const bgStyles = 'bg-white dark:bg-gray-800';
  
  const hoverStyles = hover 
    ? 'transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer group' 
    : '';

  return (
    <div className={`${baseStyles} ${paddings[padding]} ${shadows[shadow]} ${borderStyles} ${bgStyles} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
