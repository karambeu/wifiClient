'use client'
import React,{useState,useEffect} from 'react'; 
import { useRouter , useSearchParams} from 'next/navigation';
import { toast } from 'react-toastify'
import { signIn } from 'next-auth/react'


const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const searchParams = useSearchParams();

    useEffect(() => {
        const message = searchParams.get('message');
        if (message === 'signed-out') {
            toast.info('Vous êtes déconnecté');
            router.replace('/');
        }
    }, [searchParams, router]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            toast.error("Veuillez renseigner tous les champs");
            return;
        }
        try {
            const response = await signIn("credentials", {
                email,
                password,
                redirect: false,
            });

            if (!response.ok) {
                toast.error('Email ou mot de passe incorrect.');
                return;
            }
            toast.info('Vous êtes connecté!');
            router.push('/dashboard');
        } catch (error) {
            console.log('error:', error);
            toast.error('Échec de la connexion. Veuillez réessayer.');
        }
    }
  return (
    <>
        <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="email">Pseudo ou Email</label>
              <input type="text" id="email" placeholder="Entrez votre email" onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="input-group">
              <label htmlFor="password">Mot de passe</label>
              <input type="password" id="password" placeholder="Entrez votre mot de passe" onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <button type="submit">Se connecter</button>
          </form>
    </>
  );
};

export default LoginForm;
