/** @format */
import { CiUser } from "react-icons/ci";
import React, { useState } from "react";
import { MdAddIcCall } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";

const NewForm2 = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [password, setPassword] = useState("");
  const onSubmit = (value) => {
    console.log([value]);
  };

  return (
    <div className='bg-pink-300 min-h-screen flex items-center justify-center  '>
      <form
        action=''
        className='bg-green-200 border-2  border-black flex flex-col items-center justify-center md:block '
        onSubmit={onSubmit}>
        <div className='p-6'>
          <p className='text-2xl font-semibold  border-black'>
            Registration Form
          </p>

          <span className='bg-zinc-400 h-[1px] w-full block max-w-[250px] my-1'></span>

          <p className='text-sm font-medium text-zinc-500 pt-1'>
            Fill out the form carefully for registration
          </p>
        </div>
        <span className='bg-zinc-400 h-[1px] w-full block'></span>
        <div className='form-info p-6 space-y-12'>
          <div className='studentname text-center md:text-start'>
            <p className='font-medium text-lg mb-2'> Student Name</p>
            <div className='grid md:grid-cols-3 gap-1 '>
              <InputFeild label='First Name' htmlFor='fname' type='text' />
              <InputFeild label='Middle Name' htmlFor='mname' type='text' />
              <InputFeild label='Last Name' htmlFor='lname' type='text' />
            </div>
          </div>

          {/* birth date and gender option start */}
          <div className='flex gap-2 '>
            <div className='flex-1'>
              <p className='font-medium text-lg mb-2'>Birth Date</p>
              <div className='grid grid-cols-3 gap-1 '>
                <InputFeild label='Day' htmlFor='day' type='number' />
                <InputFeild label='Month' htmlFor='month' type='number' />
                <InputFeild label='Year' htmlFor='year' type='number' />
              </div>
            </div>
            <div className='flex-1'>
              <p className='font-medium text-lg mb-2'>Mobile</p>
              <InputFeild
                label=''
                htmlFor='fname'
                type='number'
                icon={MdAddIcCall}
                placeholder='type your mobile number'
              />
            </div>
          </div>
          {/* birth date and gender option end */}

          {/* address-start */}
          <div className='address flex flex-col gap-2'>
            <div>
              <p className='font-medium text-lg mb-2'>Address:</p>
              <InputFeild
                label='Street Address'
                htmlFor='address'
                id='address'
                type='text'
              />
            </div>
            <InputFeild
              label='Street Address Line 2'
              htmlFor='address2'
              type='text'
              id='address2'
            />
            {/* city-start */}
            <div className='grid grid-cols-2 gap-2'>
              <InputFeild
                label='City Code'
                htmlFor='city'
                id='city'
                type='text'
              />
              <InputFeild
                label='Province/State'
                htmlFor='province'
                id='province'
                type='text'
              />
            </div>
            {/* city-end */}
          </div>
          {/* address-end */}

          {/* others-info-start */}
          <div className='grid grid-cols-2 gap-x-2 gap-y-3'>
            <div className='flex flex-col justify-center'>
              <p className='font-medium text-lg mb-2'>Student E-mail:</p>
              <InputFeild
                label='Email'
                htmlFor='email'
                id='email'
                type='email'
                placeholder='name@gmail.com'
              />
            </div>

            <div>
              <p className='font-medium text-lg mb-2'>Password:</p>
              <InputFeild
                label='Password'
                htmlFor='password'
                id='password'
                type='password'
                placeholder='Type strong password'
              />
            </div>
            <div>
              <p className='font-medium text-lg mb-2'>Mobile:</p>
              <InputFeild
                label='Mobile'
                htmlFor='mobile'
                id='mobile'
                type='number'
              />
            </div>

            <div>
              <p className='font-medium text-lg mb-2'>Nationality:</p>
              <InputFeild
                label='Nationality'
                htmlFor='nationality'
                id='nationality'
                type='text'
              />
            </div>

            <div>
              <p className='font-medium text-lg mb-2'>Religion:</p>
              <InputFeild
                label='Religion'
                htmlFor='religion'
                id='religion'
                type='text'
              />
            </div>

            <div>
              <p className='font-medium text-lg mb-2'>Hobby:</p>
              <InputFeild
                label='Hobby'
                htmlFor='hobby'
                id='hobby'
                type='text'
              />
            </div>
          </div>
          {/* others-info-end*/}

          {/* available-course-start */}

          <div className='bg-pink-300  '>
            <p className='font-medium text-lg mb-2'>Course Schedule:</p>
            <div className='flex flex-col '>
              <InputFeild
                htmlFor='address'
                id='address'
                type='radio'
                className='self-start'
              />
              <InputFeild htmlFor='address' id='address' type='radio' />
              <InputFeild htmlFor='address' id='address' type='radio' />
            </div>
          </div>
          {/* available-course-end */}

          {/* select-course-start */}

          <div className='bg-orange-400'>
            <p className='font-medium text-lg mb-2'>Select Course:</p>
            <div className='grid grid-cols-4 gap-2 '>
              <InputFeild htmlFor='address' id='address' type='checkbox' />
              <InputFeild htmlFor='address' id='address' type='checkbox' />
              <InputFeild htmlFor='address' id='address' type='checkbox' />
              <InputFeild htmlFor='address' id='address' type='checkbox' />
            </div>
          </div>
          {/* select-course-end */}

          {/* Choose Packages-start */}
          <div className='bg-green-400'>
            <p className='font-medium text-lg mb-2'>Choose Packages:</p>
            <div className='grid grid-cols-4 gap-2 '>
              <InputFeild htmlFor='address' id='address' type='checkbox' />
              <InputFeild htmlFor='address' id='address' type='checkbox' />
              <InputFeild htmlFor='address' id='address' type='checkbox' />
              <InputFeild htmlFor='address' id='address' type='checkbox' />
            </div>
          </div>
          {/* Choose Packages-end */}
          <button
            className='w-full bg-white border-zinc-400 border outline-none py-2 rounded-md font-medium'
            type='submit'>
            Submit
          </button>

          {/* practice-start */}
          <InputFeild
            value={password}
            placeholder='password'
            type='password'
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* practice-end*/}
          <div className='h-[100px]'></div>
        </div>
      </form>
    </div>
  );
};

export default NewForm2;

const InputFeild = ({
  label,
  htmlFor,

  icon,
  placeholder,
  id,
  value,
  className,
  ...props
}) => {
  const Icon = icon;
  const [type, setType] = useState(props.type || "text");

  return (
    <div className='flex flex-col '>
      <div className='relative flex items-center'>
        {icon && (
          <Icon className='absolute w-7 pl-3 h-7 top-1/2 -translate-y-1/2 text-zinc-400' />
        )}
        <input
          className={` border border-zinc-400 outline-none p-2 ${
            icon ? "pl-10" : ""
          } rounded-md w-full placeholder:text-sm placeholder:text-zinc-400  `}
          placeholder={placeholder}
          id={id}
          value={value}
          {...props}
          type={type}
        />

        {props.type == "password" && (
          <button
            type='button'
            className='absolute top-1/2 -translate-y-1/2 right-2'
            onClick={() =>
              setType((crr) => (crr == "password" ? "text" : "password"))
            }>
            {type == "password" ? <Icon /> : "hide"}
          </button>
        )}
      </div>

      <label htmlFor={htmlFor} className='text-sm text-zinc-500'>
        {label}
      </label>
    </div>
  );
};
