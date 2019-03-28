import * as Yup from 'yup';

export const ConfirmSignInSchema = Yup.object().shape({
  code: Yup.string()
    .min(6, 'Слишком короткий код!')
    .max(10, 'Слишком длинный код!')
    .required('Поле не должно быть пустым'),
});
