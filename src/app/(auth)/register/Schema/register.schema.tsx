
import * as zod from 'zod'

export const registerSchema = zod.object(
    {
        name: zod.string().nonempty('this field is require').min(2, 'min 2 char').max(10, 'max 10 char'),
        email: zod.string().nonempty('this field is require').email('invalid email'),
        password: zod.string().nonempty('this field is require')
        .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
            , `Has minimum 8 characters in length. Adjust it by modifying {8,}
At least one uppercase English letter. You can remove this condition by removing (?=.*?[A-Z])
At least one lowercase English letter.  You can remove this condition by removing (?=.*?[a-z])
At least one digit. You can remove this condition by removing (?=.*?[0-9])
At l,east one special character,  You can remove this condition by removing (?=.*?[#?!@$%^&*-])`
        ),
        repassword: zod.string().nonempty('this filed is required'),
        phone: zod.string().nonempty('this field is require').regex(/^01[0125]\d{8}$/, 'invalid phone number')
    }).refine((data)=>data.password===data.repassword,{
        error : "repassword don't match password",
        path  :['repassword']
    })

   export  type registerSchemaType = zod.infer<typeof registerSchema>