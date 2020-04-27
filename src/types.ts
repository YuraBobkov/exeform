export type Touched = {
  [path: string]: boolean;
};

export type Errors = {
  [path: string]: string;
};

export type Validate<Values> = (values: Values) => Errors;

export type Options<Values> = {
  initialValues: Values;
  validate?: Validate<Values>;
};

export type FieldOptions = {
  type: 'checkbox' | 'radio';
};

export type FormProps<Values> = {
  onSubmit(values: Values): void;
};

export type Listener = () => void;

export type Unsubscribe = () => void;

export type Form<Values = any> = {
  values: Values;
  touched: Touched;
  errors: Errors;
  isValid: boolean;
  setFieldValue(name: string, value: any): void;
  setFieldTouched(name: string, isTouched?: boolean): void;
  setFieldError(name: string, message: string): void;
  touchAllFields(): void;
  subscribe(listener: Listener): Unsubscribe;
};
