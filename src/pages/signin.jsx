import Layout from "@/container/layout";
import { useFormik } from "formik";
import Head from "next/head";
import Input from "@/components/FormInput"
import Link from "next/link";
import * as Yup from "yup"


const initialValues={
    email:"",
    password:""
 };
 const validationSchema = Yup.object({
    email:Yup.string().required("ایمیل را وارد کنید").email("ایمیل نامعتبر است"),
    password:Yup.string()
    .required("رمز عبور را وارد کنید")
    .min(8 , "رمز عبور نباید از 8 کارکتر کم تر باشد")
});

    const RegisterForm=()=>{
    const onSubmit=(values)=>{
    const {email,password}=values
        
    };
 
    const formik=useFormik({
        initialValues,
        onSubmit,
        validationSchema,
        validateOnMount :true,
    })
    return (
        <Layout>
            <Head>
            <title>FrontHooks -Signin </title>
            </Head>
            <div className="md:max-w-md px-4 md:px-4 container mx-auto">
        <form onSubmit={formik.handleSubmit} className="flex flex-col space-y-4">
        <h1 className="font-black text-2xl text-violet-700 mb-4">ورود</h1>
        <Input  label="ایمیل" type="email" name="email" formik={formik} /> 
        <Input label="رمز عبور" type="password" name="password" formik={formik}/>

        <button 
        type="submit"
        disabled={!formik.isValid}
        className="w-full py-2 rounded-lg bg-violet-800 cursor-pointer text-white">
            ورود
        </button>
      <Link href={"/signup"}>
        <p className="mt-4 py-4 cursor-pointer">
            هنوز ثبت نام نکردی؟ لاگین
        </p>
      </Link>
        </form>
            </div>
        </Layout>
    );

    } 
export default RegisterForm;