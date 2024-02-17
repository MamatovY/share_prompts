import Nav from '@/components/Nav'
import Provider from '@/components/Provider'
import '@/styles/globals.css'

export const metadata = {
    title: 'Promptopia',
    description: "Открывайте и делитесь подсказками искусственного интеллекта"
}

const Layout = ({ children }) => {
    return (
        <html lang='ru'>
            <body>
                <Provider>
                    <div className="main">
                        <div className="gradient" />
                    </div>
                    <main className="app">
                        <Nav />
                        {children}
                    </main>
                </Provider>
            </body>
        </html>
    )
}

export default Layout