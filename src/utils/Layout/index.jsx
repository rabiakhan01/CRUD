import React from 'react';
const Layout = ({ children }) => {
    return (
        <div className='flex justify-center items-center h-lvh mx-5 sm:mx-10 lg:mx-16 xl:mx-20 2xl:max-w-[1200px] 2xl:my-0 2xl:mx-auto'>
            {children}
        </div>
    );
}

export default Layout;