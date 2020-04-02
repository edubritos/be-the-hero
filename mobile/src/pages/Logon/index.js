import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert, Image, Text, View, TouchableOpacity, TextInput } from 'react-native';

import api from '../../services/api';

import logoImg from '../../assets/Logo.png';

import styles from './styles';


export default function Logon(){

    const [ongs, setOngs] = useState([]);
    //const incidents = "Oi";

    const navigation = useNavigation();

    
    function navigateToIncidents(){
        navigation.navigate('Incidents')
    };

    useEffect(() => {

        const response = api.get('ongs', {
            params: {'id': '...'}

        });
        setOngs([...ongs, ...response.data]);
    }, [ ]);

    state = {inputId:''};
    
    
    function logon () {
        if (this.state.inputId === response.data){
            navigateToIncidents()
        }else{
            alertLogin()
        };
    };
        
    function alertLogin () {
        Alert.alert(
            'Erro ao logar',
            'Numero de ID está incorreto ou não consta nos registros, tente novamente.',
            [{ text:'OK'} ], { cancelable: false } 
        );
    }


    

    return(
        <View style={styles.container}>

            <View style={styles.header}>
                <Image source={logoImg}/>
            </View>

            <Text style={styles.title}>Faça seu Logon</Text>

            <View>
                <TextInput 
                    onChangeText={text => this.state.inputId = text}
                    placeholder="Id" 
                    style={styles.idLogon}/>

                <TouchableOpacity
                    style={styles.logonButton}
                    onPress={()=> logon()}
                    >
                    <Text style={styles.logonButtonText}>Entrar </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    
                    onPress={()=> logon()}
                    >
                    <Text style={styles.cadasButtonText}>Cadastrar</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
    
}