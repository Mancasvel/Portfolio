'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import Link from 'next/link';

type FormData = {
  nombre: string;
  email: string;
  mensaje: string;
};

export default function Contacto() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // En un entorno real, aquí se enviaría el formulario a un endpoint
      // Por ejemplo, usando Resend:
      // const { data, error } = await resend.emails.send({
      //   from: 'Formulario Portfolio <onboarding@resend.dev>',
      //   to: 'tu-email@ejemplo.com',
      //   subject: `Contacto de ${data.nombre}`,
      //   text: `Mensaje de ${data.nombre} (${data.email}): ${data.mensaje}`,
      // });
      
      // Simulamos un envío exitoso
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitSuccess(true);
      reset();
    } catch (error) {
      setSubmitError('Ha ocurrido un error al enviar el mensaje. Por favor, inténtalo de nuevo.');
      console.error('Error al enviar el formulario:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container-custom section-padding">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12"
      >
        <div>
          <h1 className="heading-xl mb-6">Contacto</h1>
          <p className="text-xl opacity-80 mb-8">
            ¿Tienes un proyecto en mente o quieres que colaboremos? 
            Escríbeme y conversemos sobre cómo podemos trabajar juntos.
          </p>
          
          <div className="space-y-4 mt-12">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium">Email</h3>
                <p className="text-accent">email@ejemplo.com</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium">LinkedIn</h3>
                <Link href="https://linkedin.com/in/tuusuario" target="_blank" className="text-accent hover:underline">
                  linkedin.com/in/tuusuario
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-900 p-6 rounded-xl">
          {submitSuccess ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <h3 className="text-2xl font-bold mb-2">¡Mensaje enviado!</h3>
              <p className="text-gray-300 mb-6">Gracias por contactarme. Te responderé lo antes posible.</p>
              <button
                onClick={() => setSubmitSuccess(false)}
                className="btn-primary"
              >
                Enviar otro mensaje
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <h2 className="text-2xl font-bold mb-6">Envíame un mensaje</h2>
              
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium mb-2">
                  Nombre
                </label>
                <input
                  id="nombre"
                  type="text"
                  {...register('nombre', { required: 'El nombre es obligatorio' })}
                  className={`w-full p-3 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-accent ${
                    errors.nombre ? 'border border-red-500' : ''
                  }`}
                />
                {errors.nombre && (
                  <p className="text-red-500 text-sm mt-1">{errors.nombre.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  {...register('email', { 
                    required: 'El email es obligatorio',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Email inválido'
                    }
                  })}
                  className={`w-full p-3 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-accent ${
                    errors.email ? 'border border-red-500' : ''
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium mb-2">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  rows={5}
                  {...register('mensaje', { required: 'El mensaje es obligatorio' })}
                  className={`w-full p-3 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-accent ${
                    errors.mensaje ? 'border border-red-500' : ''
                  }`}
                />
                {errors.mensaje && (
                  <p className="text-red-500 text-sm mt-1">{errors.mensaje.message}</p>
                )}
              </div>
              
              {submitError && (
                <div className="bg-red-900 text-white p-3 rounded-md">
                  {submitError}
                </div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex justify-center items-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </>
                ) : (
                  'Enviar mensaje'
                )}
              </button>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
} 