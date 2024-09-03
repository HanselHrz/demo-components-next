import { Button, ButtonProps } from "lynx-ui-demo-components";

export default function Home() {
  const variants: ButtonProps["variant"][] = ["default", "primary", "success", "danger", "warning"];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-2xl font-bold"> Prueba libreria de componentes</h1>
      {variants.map(variant => (
        <Button key={variant} variant={variant}>
          {variant}
        </Button>
      ))}
    </main>
  );
}
