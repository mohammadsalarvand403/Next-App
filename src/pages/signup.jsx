import Layout from "@/container/layout";
import { useFormik } from "formik";
import Head from "next/head";
import Input from "@/components/FormInput"
import Link from "next/link";
import * as Yup from "yup"


const initialValues={
    email:"",
    password:"",
    name:"",
    phoneNumber:"",
    confirmPassword:""
 };
 const validationSchema = Yup.object({
    name:Yup.string().required("نام ونام خانوادگی را وارد کنید")
    .min(6 ,"نام و نام خانوادگی حداقل شامل 6 کارکترباشد"),

    email:Yup.string().required("ایمیل را وارد کنید").email("ایمیل نامعتبر است"),
    phoneNumber:Yup.string().required("شماره موبایل خود را وارد کنید")
    .matches(/^[0-9]{11}$/,"شماره موبایل باید 11رقم باشد").nullable(),
    password:Yup.string()
    .required("رمز عبور را وارد کنید")
    .min(8 , "رمز عبور نباید از 8 کارکتر کم تر باشد"),
    confirmPassword:Yup.string().oneOf([Yup.ref("password"),""],"رمز عبور مجدد وارد کنید")
    .required("رمز عبور هم خوانی ندارد")

});

    const RegisterForm=()=>{
    const onSubmit=(values)=>{
    const {email,password,name,phoneNumber,confirmPassword}=values
        
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
        <h1 className="font-black text-2xl text-violet-700 mb-4"> ثبت نام</h1>
        <Input  label="نام و نام خانوادگی" type="text" name="name" formik={formik} /> 
        <Input  label="ایمیل" type="email" name="email" formik={formik} /> 
        <Input 
        label="شماره موبایل" 
        type="tel"
        name="phoneNumber"
        placeholder="09123654257"
        formik={formik}/>
    <Input 
        label="رمز عبور" 
        type="password"
        name="password"
        formik={formik}/>
        <Input 
        label=" تکرار رمز" 
        type="password"
        name="confirmPassword"
        formik={formik}/>
        <button 
        type="submit"
        disabled={!formik.isValid}
        className="w-full py-2 rounded-lg bg-violet-800 text-white">
            ثبت نام 
        </button>
      <Link href={"/signin"}>
        <p className="mt-4 py-4 cursor-pointer">
            قبلا ثبت نام کردید ؟ لاگین کنید
            </p>
      </Link>
        </form>
            </div>
        </Layout>
    );

    } 
export default RegisterForm;