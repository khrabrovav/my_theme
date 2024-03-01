type PublicProps = {
  className?: string; // класс, class, класснейм
  classNameInput?: string; // классИнпут
  classNamePrefix?: string; // классПрефикс
  classNameFieldSet?: string;
  label?: string; // лейбл
  autoComplete?: string; // автоКомпит
  size?: 'sm' | 'md' | 'lg'; // размер
  placeholder?: string; // плейсхолдер
  prefix?: React.ReactNode; // префикс
  type?: 'text' | 'password' | 'number'; // тип
  isVisibleControls?: boolean; // видимыйКонтроль
};
