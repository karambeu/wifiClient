'use client'
import LoginForm from "@/components/Login";
import Image from "next/image";
import { Suspense } from 'react'

export default function Home() {
  return (
    <>
    
      <div className="login-container">
        <div className="login-box">
          <div className="left-section">
            <Image 
            src="/loginform.jpg" 
            alt="Image de présentation" 
            width={1280}
            height={1920}
            className='img-fluid'
            priority
            />
          </div>
          <div className="right-section">
            <h2 className="title">Bienvenue</h2>
            <p className="description">Connectez-vous à votre compte</p>
            <Suspense>
            <LoginForm/>
            </Suspense>
          </div>
        </div>
      </div>
     
    </>
  );
}
