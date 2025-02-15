import React from 'react'
import TextDecorator from '@/assets/images/text-decorator.png'
import DressIcon from '@/assets/images/icon-dreess.png'
import '@/styles/fifthSection/global.scss'

const fifthSection = () => {
    return (
        <>
            <sectdion id='confirmation-section' className='w-screen gap-y-8 flex flex-col items-center justify-center min-h-screen p-3'>
                <h1 className='text-decorator font-Carattere text-7xl z-10'>¿Asistiras?</h1>
                <img src={TextDecorator} alt='Dress Icon' className='w-auto h-14 absolute mt-[-36rem] z-0' />
                <span className='font-Carattere text-3xl'>Por favor, confirma tu asistencia a este día tan especial</span>
                <span className='font-Carattere text-3xl'>¡Tu respuesta es muy importante!</span>
                <span className='text-7xl font-Carattere text-center'>Familia Lara Avila</span>
                <span className='font-Alice text-2xl text-center'>Tiene 2 pases: 1 adulto y 1 niño</span>
                <div className='flex flex-col gap-y-3'>
                    <div className='flex flex-row gap-x-3 font-Alice text-2xl'>
                        <span>Confirmar adultos:</span>
                        <select name="adults-confrmation" id="adults-confirmation">
                            <option value="1">1 persona</option>
                            <option value="2">2 persona</option>
                        </select>
                    </div>
                    <div className='flex flex-row gap-x-3 font-Alice text-2xl'>
                        <span>Confirmar niños:</span>
                        <select name="children-confrmation" id="children-confirmation">
                            <option value="1">1 niño</option>
                            <option value="2">2 niños</option>
                        </select>
                    </div>
                </div>
                <div className='flex flex-row gap-x-6 font-Alice text-2xl'>
                    <button className='py-2 px-7 rounded border-2'>Confirmar</button>
                    <button className='py-2 px-7 rounded border-2'>No podre asistir</button>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <span>Codigo de vetimenta</span>
                    <img className='h-24 w-24' src={DressIcon} alt="dress-icon"/>
                    <span>Formal</span>
                </div>
            </sectdion>
        </>
    )
}

export default fifthSection