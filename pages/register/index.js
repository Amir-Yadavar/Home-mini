import BoxRegister from '@/modules/BoxRegister/BoxRegister'
import React from 'react'

function Register() {
    return (
        <section className='container-boxRegister p-3 m-2'>
            <BoxRegister title="ثبت نام" question="آیا حساب کاربری دارید ؟" answer="وارد شوید" url="/login"/>
        </section>
    )
}

export default Register