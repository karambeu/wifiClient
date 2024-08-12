'use client'
import { signOut } from 'next-auth/react';

export default function LogoutButton() {
    function handleSignOut() {
        signOut({
          callbackUrl: '/?message=signed-out', // URL vers laquelle l'utilisateur sera redirigé après la déconnexion
        });
      }
  return (
    <button className="logout-button" onClick={handleSignOut}>
      Se déconnecter
    </button>
  );
}
