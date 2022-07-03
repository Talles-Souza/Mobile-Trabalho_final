import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Produto } from "../pages/product";

import Login from "../pages/login";
import Home from "../pages/home";
import Categorias from "../pages/categories";
import Register from "../pages/registration";
import ForgotPassword from "../pages/recoverPassword";




const TabNavigation = createBottomTabNavigator();
const BottomTabNavigation = () => {
    return (
        <TabNavigation.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: { backgroundColor: '#1395d6d6', borderBottomWidth: 0, }
        }}>
            <TabNavigation.Screen name='HomeTabScreen' component={Home} />
            <TabNavigation.Screen name='CategoriasTabScreen' component={Categorias} />
        </TabNavigation.Navigator>
    );
}
const DrawerNavigation = createDrawerNavigator();
const NavigationDrawer = () => {

    return (
        <DrawerNavigation.Navigator>
            <DrawerNavigation.Screen
                name='TabNavigationScreen'
                component={BottomTabNavigation}
                options={{ title: 'Home' }}
            />

            <DrawerNavigation.Screen
                name="CategoriasDrawerScreen"
                component={Categorias}
                options={{ title: 'Categorias' }}

            />

        </DrawerNavigation.Navigator>
    )
}

const StackNavigation = createNativeStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <StackNavigation.Navigator>
                <StackNavigation.Screen
                    options={{ headerShown: false }}
                    name='Login'
                    component={Login}
                />
                <StackNavigation.Screen
                    options={{ headerShown: false }}
                    name='HomeScreen'
                    component={NavigationDrawer}
                />
                <StackNavigation.Screen
                    options={{ headerShown: false }}
                    name='Categorias'
                    component={Categorias}
                />
                <StackNavigation.Screen
                    options={{ headerShown: false }}
                    name='Register'
                    component={Register}
                />
                <StackNavigation.Screen
                    options={{ headerShown: false }}
                    name='Recuperar senha'
                    component={ForgotPassword}
                />

                <StackNavigation.Screen
                    options={{ headerShown: false }}
                    name='ProdutoScreen'
                    component={Produto}
                />

            </StackNavigation.Navigator>
        </NavigationContainer>

    );
}

export default Routes;