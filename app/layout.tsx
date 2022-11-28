import { Inter } from "@next/font/google";
import Header from "../components/navbar/header";
import "../styles/globals.css";

const inter = Inter();

export default ({ children }: LayoutProps) => {

    return (
        <html lang="ja" className={inter.className}>
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>PM Songs</title>
            </head>
            <body>
                <Header />
                {children}
            </body>
        </html>
    );

}