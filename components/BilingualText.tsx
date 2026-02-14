import { ReactNode } from 'react';

interface BilingualTextProps {
  en: string | ReactNode;
  ar: string | ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export function BilingualText({ en, ar, className = '', as: Component = 'span' }: BilingualTextProps) {
  return (
    <>
      <Component className={`lang-en:inline lang-ar:hidden ${className}`}>
        {en}
      </Component>
      <Component className={`lang-en:hidden lang-ar:inline ${className}`}>
        {ar}
      </Component>
    </>
  );
}
