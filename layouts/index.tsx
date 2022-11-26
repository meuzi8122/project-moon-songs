import Header from "./header";

export default ({ children }: LayoutProps) => {

    return (
        <>
            <Header />
            {children}
        </>
    )

}