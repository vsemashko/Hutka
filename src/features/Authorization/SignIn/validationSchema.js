import * as Yup from 'yup';

export const SignInSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .min(9, 'Слишком короткий номер!')
    .max(20, 'Слишком длинный номер!')
    .required('Поле не должно быть пустым'),
});
