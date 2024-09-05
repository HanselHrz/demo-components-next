"use client";  // Indica que este componente se ejecuta en el cliente

import { useRouter } from 'next/navigation';
import { Button } from 'lynx-ui-demo-components';

export default function Page() {
  const router = useRouter();

  const handleNavigation = () => {
    router.push('/SpecificComponents');
  };

  return (
    <>
      <h1 className="text-2xl font-bold">Prueba de Componentes Específicos</h1>
      <Button variant="primary" className="mt-10" onClick={handleNavigation}>
        Ver Componentes Específicos
      </Button>
    </>
  );
}
