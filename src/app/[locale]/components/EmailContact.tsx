"use client"

import { useTranslations } from "next-intl";
import emailjs from '@emailjs/browser';
import { useState } from "react";
import { BlueDiv } from "./BlueDiv";
import { FormSend } from "./FormSend";

export const EmailContact = () => {
    const t = useTranslations('contact');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [sucessEmail, setSucessEmail] = useState(false);

    const [nameError, setNameError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [messageError, setMessageError] = useState('');

    function validateEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function validatePhone(phone: string): boolean {
        const phoneRegex = /^[0-9]+$/;
        return phoneRegex.test(phone);
    }

    function validateName(name: string): boolean {
        // Verifica se o nome contém apenas letras e tem pelo menos 3 caracteres
        const nameRegex = /^[A-Za-zÀ-ÿ\s]{3,}$/;
        return nameRegex.test(name);
    }



    function validateForm(): boolean {
        let isValid = true;

        if (!validateName(name)) {
            setNameError(t('name-erro'));
            setName('');
            isValid = false;
        } else {
            setNameError('');
        }

        if (!validateEmail(email)) {
            setEmailError(t('email-erro'));
            setEmail('');
            isValid = false;
        } else {
            setEmailError('');
        }

        if (!phone.trim()) {
            setPhoneError(t('phone-erro'));
            isValid = false;
        } else if (!validatePhone(phone)) {
            setPhoneError(t('phone-erro'));
            setPhone('');
            isValid = false;
        } else {
            setPhoneError('');
        }

        if (message.trim().length < 10) {
            setMessageError(t('message-erro'));
            isValid = false;
        } else {
            setMessageError('');
        }

        return isValid;
    }

    function sendEmail(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        const templateParams = {
            from_name: name,
            message: message,
            email: email,
            phone: phone
        };

        console.log(process.env.NEXT_PUBLIC_EMAILJS_USER_ID)

        emailjs.send("service_sehnuts", "template_oi24zff", templateParams, process.env.NEXT_PUBLIC_EMAILJS_USER_ID)
            .then((response) => {
                console.log("email Enviado", response.status, response.text);
                setMessage('');
                setEmail('');
                setName('');
                setPhone('');
                setSucessEmail(true);
            }, (err) => {
                console.log("Deu erro:", err);
            });
    }

    return (
        <>
            {sucessEmail &&
                <FormSend />
            }


            <BlueDiv firstText={t('h1')} aboutStyle="hidden" />

            <div className='text-bluedark w-full h-full flex justify-center items-center flex-col text-[15px] font-nexa text-justify md:pl-0 md:w-[95%] xl:w-[85%]'>
                <div className="w-full h-full flex justify-start items-center flex-col mt-7 md:items-start">
                    <span className="mb-5 font-conthrax text-[15px] md:text-[12px]">{t('h1')}</span>

                    <form className="w-full h-full flex justify-center items-center mb-7 flex-col md:items-start md:text-[12px] 
                           md:justify-start md:flex-row lg:text-[15px]" onSubmit={sendEmail}>
                        <div className="w-full h-full flex items-start justify-center flex-col space-y-5 md:w-[50%]">
                            <div className="w-full h-full flex items-center flex-col md:items-start">
                                <span className="text-[14px] md:text-[15px]">{t('name')}</span>
                                <input type="text"
                                    placeholder={nameError || "Digite seu nome..."}
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                    maxLength={100}
                                    className={`w-[90%] h-[36px] bg-[#6FC7DA]/50 rounded-lg md:w-[70%] 
                                        ${nameError ? 'placeholder-red-600' : 'placeholder-[#6FC7DA]/0'}`}
                                />
                            </div>

                            <div className="w-full h-full flex flex-col items-center md:items-start">
                                <span className="text-[14px] md:text-[15px]">{t('phone')}</span>
                                <input type="text"
                                    placeholder={phoneError || "Digite seu Telefone..."}
                                    onChange={(e) => setPhone(e.target.value)}
                                    value={phone}
                                    maxLength={15}
                                    className={`w-[90%] h-[36px] bg-[#6FC7DA]/50 rounded-lg md:w-[70%]
                                        ${phoneError ? 'placeholder-red-600' : 'placeholder-[#6FC7DA]/0'}`}
                                />
                            </div>

                            <div className="w-full h-full flex flex-col items-center md:items-start">
                                <span className="text-[14px] md:text-[15px]">{t('email')}</span>
                                <input type="text"
                                    placeholder={emailError || "Digite seu email..."}
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    className={`w-[90%] h-[36px] bg-[#6FC7DA]/50 rounded-lg md:w-[70%]
                                        ${emailError ? 'placeholder-red-600' : 'placeholder-[#6FC7DA]/0'}`}
                                />
                            </div>

                        </div>

                        <div className="w-full h-full mt-7 flex justify-center items-center md:mt-0 md:w-[50%]">
                            <div className="w-full h-full flex justify-start items-center flex-col md:items-start">
                                <span className="text-[14px] mb-2 md:text-[15px]">{t('message')}</span>
                                <textarea
                                    placeholder={messageError || "Digite sua mensagem..."}
                                    onChange={(e) => setMessage(e.target.value)}
                                    value={message}
                                    maxLength={500}
                                    className={`w-[90%] h-[130px] bg-[#6FC7DA]/50 rounded-lg 2xl:w-[70%]
                                        ${messageError ? 'placeholder-red-600' : 'placeholder-[#6FC7DA]/0'}`}
                                />

                                <button type="submit" className="mt-4 font-conthrax text-[12px] bg-bluedark text-white px-3 rounded-lg uppercase">{t('send')}</button>
                            </div>
                        </div>

                    </form>
                </div>

            </div>
        </>
    )
}
