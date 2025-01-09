import "./globals.css";
import ContextProvaider from "@/context/contextProvaider";


export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <title> Viajando de Novo</title>
        <link rel='icon' href="/logo.png" />
      </head>

      <ContextProvaider>
        <body>
          {children}
        </body>
      </ContextProvaider>
    </html>
  );
}
