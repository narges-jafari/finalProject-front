import * as yup from 'yup'
export const schema = yup.object().shape({

  username: yup
    .string()
    .required('  لطفا این فیلد را پر کنید')
    .max(13, 'بیشترین طول ممکن برای نام کاربری 13 است')
    .min(2, 'کمترین طول ممکن برای نام کاربری 3 است'),
  email: yup
    .string()
    .email('لطفا ایمیل معتبر وارد کنید')
    .required('لطفا این فیلد را پر کنید'),

  password: yup
    .string()
    .matches(
      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/,
      ' پسوورد باید شامل یک حرف بزرگ ,یک حرف کوچک ,یک شماره و شامل کاراکتر های  (!@#$%^&*) باشد '
    )
    .required('  لطفا این فیلد را پر کنید')
    .min(8, 'کمترین طول ممکن برای  پسوورد 8 است')
    .max(16, 'بیشترین طول ممکن برای  پسوورد16  است'),


})

