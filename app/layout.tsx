import Header from "../components/navbar/header";
import "../styles/globals.css";

export default ({ children }: LayoutProps) => {
    
    <html lang="ja">
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

}