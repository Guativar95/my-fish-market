import React from 'react';
import Head from '../Head/Head';
import Header from '../ui/Header';

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div>
            <Head title={'My Fish Market'} />
            <Header />
            <main>{children}</main>
            <footer>
                <p>&copy; {new Date().getFullYear()} My Fish Market</p>
            </footer>
        </div>
    );
};

export default MainLayout;