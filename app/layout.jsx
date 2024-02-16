import '@/styles/global.css'

export const metadata = {
    title: 'Promptopia',
    description: "Открывайте и делитесь подсказками искусственного интеллекта"
}

const Layout = ({ children }) => {
    return (
        <html lang='ru'>
            <body>
                <div className="main">
                    <div className="gradient" />
                </div>
                <main className="app">
                    {children}
                </main>
            </body>
        </html>
    )
}

export default Layout