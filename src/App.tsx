import 'react-native-gesture-handler';
import Routes from './routes';
import React from 'react';
import { AutenticacaoProvider } from './context/AutenticacaoContext';
export default () => {

    return (
        <AutenticacaoProvider>
            <Routes />
        </AutenticacaoProvider>
    );
};