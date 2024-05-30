import BoxRegister from '@/modules/BoxRegister/BoxRegister'
import React from 'react'

function Login() {
    return (
        <section className='container-boxRegister p-3 m-2'>
            <BoxRegister title="ورود" question="آیا حساب کاربری ندارید ؟" answer="حساب کاربری ایجاد کنید" url="/register"/>
        </section>
    )
}

export default Login