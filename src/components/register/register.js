import React from 'react';
import { useState } from 'react';
import { AuthProvider } from '../../api/AuthProvider'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const RegisterAsCustomer = () => {
    const [registrationInfo, setRegistrationInfo] = useState({})
    const naviagate = useNavigate();
    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        setRegistrationInfo({ ...registrationInfo, [name]: value });
    }
    const register = () => {
        console.log("On register as customer", registrationInfo)
        AuthProvider.registerAsCustomer(registrationInfo).then(
            () => {
                console.log("Registered as customer")
                naviagate("/")
            }
        )
    }
    return (
        <div className='flex flex-col w-screen h-screen'>
            <nav className='p-3 absolute top-0 left-0 w-full flex flex-row justify-between items-center'>
                <h1 className='text-4xl'>የእናት ጓዳ</h1>
                <div className='flex flex-row gap-2'>
                    <Link to="/login" className='text-white'>Login</Link>
                    <Link to="/register-provider" className='text-white'>Register as provider</Link>
                </div>
            </nav>
            <div className='h-full flex-grow  grid sm:grid-cols-1 md:grid-cols-2 grid-rows-1 items-center content-center'>
                <main>
                    <form className='p-3 flex flex-col gap-4 max-w-sm m-4' >
                        <h1 className='text-4xl'>Register Customer</h1>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="firstName" >First Name</label>
                            <input type="text" name='firstName' value={registrationInfo.firstName} onChange={handleInputChange} className='flex-grow border rounded p-1' id="firstName" placeholder="" />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="lastName" >Last Name</label>
                            <input type="text" name='lastName' value={registrationInfo.lastName} onChange={handleInputChange} className='flex-grow border rounded p-1' id="lastName" placeholder="" />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="userName" >User Name</label>
                            <input type="text" name='userName' value={registrationInfo.userName} onChange={handleInputChange} className='flex-grow border rounded p-1' id="userName" placeholder="" />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="phoneNumber" >Phone Number</label>
                            <input type="tel" name='phoneNumber' value={registrationInfo.phoneNumber} onChange={handleInputChange} className='flex-grow border rounded p-1' id="phoneNumber" placeholder="" />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="email" >Email</label>
                            <input type="email" name='email' value={registrationInfo.email} onChange={handleInputChange} className='flex-grow border rounded p-1' id="email" placeholder="" />
                        </div>
                        <div className='flex flex-col gap-1 '>
                            <label htmlFor="password" >Password</label>
                            <input type="password" name='password' value={registrationInfo.password} onChange={handleInputChange} className='flex-grow border rounded p-1' id="password" placeholder="" />
                        </div>
                        <button type="button" onClick={register} className="bg-orange-500 text-white rounded p-1 text-lg">Register</button>
                    </form>
                </main>
                <div className='hidden md:flex h-full w-full'>
                    <img className='h-full w-full object-cover' src='https://picsum.photos/200' alt='logo' />
                </div>
            </div>
        </div >
    );
};


export const RegisterAsProvider = () => {
    const [registrationInfo, setRegistrationInfo] = useState({})
    const naviagate = useNavigate();
    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        setRegistrationInfo({ ...registrationInfo, [name]: value });
    }
    const register = () => {
        console.log("On register as provider", registrationInfo)
        AuthProvider.registerAsProvider(registrationInfo).then(
            () => {
                console.log("Registered as provider")
                naviagate("/")
            }
        )
    }
    return (
        <div className='flex flex-col w-screen h-screen'>
            <nav className='p-3 absolute top-0 left-0 w-full flex flex-row justify-between items-center'>
                <h1 className='text-4xl'>የእናት ጓዳ</h1>
                <div className='flex flex-row gap-2'>
                    <Link to="/login" className='text-white'>Login</Link>
                    <Link to="/register-customer" className='text-white'>Register as customer</Link>
                </div>
            </nav>
            <div className='h-full flex-grow  grid sm:grid-cols-1 md:grid-cols-2 grid-rows-1 items-center content-center'>
                <main>
                    <form className='p-3 flex flex-col gap-4 max-w-sm m-4' >
                        <h1 className='text-4xl'>Register Provider</h1>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="firstName" >First Name</label>
                            <input type="text" name='firstName' value={registrationInfo.firstName} onChange={handleInputChange} className='flex-grow border rounded p-1' id="firstName" placeholder="" />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="lastName" >Last Name</label>
                            <input type="text" name='lastName' value={registrationInfo.lastName} onChange={handleInputChange} className='flex-grow border rounded p-1' id="lastName" placeholder="" />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="userName" >User Name</label>
                            <input type="text" name='userName' value={registrationInfo.userName} onChange={handleInputChange} className='flex-grow border rounded p-1' id="userName" placeholder="" />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="phoneNumber" >Phone Number</label>
                            <input type="tel" name='phoneNumber' value={registrationInfo.phoneNumber} onChange={handleInputChange} className='flex-grow border rounded p-1' id="phoneNumber" placeholder="" />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="email" >Email</label>
                            <input type="email" name='email' value={registrationInfo.email} onChange={handleInputChange} className='flex-grow border rounded p-1' id="email" placeholder="" />
                        </div>
                        <div className='flex flex-col gap-1 '>
                            <label htmlFor="password" >Password</label>
                            <input type="password" name='password' value={registrationInfo.password} onChange={handleInputChange} className='flex-grow border rounded p-1' id="password" placeholder="" />
                        </div>
                        <button type="button" onClick={register} className="bg-orange-500 text-white rounded p-1 text-lg">Register</button>
                    </form>
                </main>
                <div className='hidden md:flex h-full w-full'>
                    <img className='h-full w-full object-cover' src='https://picsum.photos/200' alt='logo' />
                </div>
            </div>
        </div >
    );
};