import * as yup from 'yup'
export const schema = yup.object().shape({
  fullName: yup
    .string()
    .required('  لطفا این فیلد را پر کنید')
    .min(3, 'کمترین طول ممکن برای اسم 6 هست'),

  username: yup
    .string()
    .required('  لطفا این فیلد را پر کنید')
    .max(13, 'بیشترین طول ممکن برای نام کاربری 13 است')
    .min(2, 'کمترین طول ممکن برای نام کاربری 3 است'),
  email: yup
    .string()
    .email('لطفا ایمیل معتبر وارد کنید')
    .required('لطفا این فیلد را پر کنید'),
  birthdate: yup
    .string()
    .required('لطفا این فیلد را پر کنید'),

  nationalcode: yup
    .string()
    .required('لطفا این فیلد را پر کنید')
    .max(10, 'کدملی 10 رقمی است')
    .min(10, '      کدملی 10 رقمی است '),

  // gender: yup.string().required('یک گزینه انتخاب کنید'),

  password: yup
    .string()
    .matches(
      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/,
      ' پسوورد باید شامل یک حرف بزرگ ,یک حرف کوچک ,یک شماره و شامل کاراکتر های  (!@#$%^&*) باشد '
    )
    .required('  لطفا این فیلد را پر کنید')
    .min(8, 'کمترین طول ممکن برای  پسوورد 8 است')
    .max(16, 'بیشترین طول ممکن برای  پسوورد16  است')

})
