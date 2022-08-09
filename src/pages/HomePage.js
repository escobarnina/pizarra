import React from 'react';
import authProvider from "../firebase/AuthProvider";

function HomePage(props) {


    return (
        <div className={'min-h-screen flex justify-center items-center bg-blue-50'}>
            <div className={'w-2/5 bg-white h-120 shadow-xl p-5 pt-10'}>
                <h1 className={'text-xl font-medium text-center'}>{'Empieza a diseñar tus modelos C4 de forma colaborativa'}</h1>
                <div align="center">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRssThUPbWn5OPIJqA1AUUWB5lB-TqFWe0qLA&usqp=CAU"/>
                </div>
                <div className={'flex justify-center items-center h-full'}>
                <button className={'border rounded block my-5 inline-flex space-x-2 p-2 hover:shadow-lg'} onClick={e=>authProvider.login()}>
                    <img src="https://img.icons8.com/color/24/000000/google-logo.png"/>
                    <span>{'Iniciar sesión'}</span>
                </button>
                </div>
            </div>
        </div>
    );
}

export default HomePage;