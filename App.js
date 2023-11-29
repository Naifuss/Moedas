import React, { useState, useEffect } from 'react';
import { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';

import {
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { styles } from './styles';

export default function App() {
  const [moedaOrigem, setMoedaOrigem] = useState('BRL')
  const [moedaDestino, setMoedaDestino] = useState('USD')
  const [valorConvertido,setValorConvertido] = useState('')
  const [valorOriginal, setValorOriginal] = useState('3')

  const buscarHandle = async () =>{
    let URL = `https://economia.awesomeapi.com.br/last/${moedaOrigem}-${moedaDestino}`
    try{
      let page = await fetch(URL)
      let json = await page.json()
      let indice = parseFloat(json[`${moedaOrigem}${moedaDestino}`].high)
      let valor = parseFloat(valorOriginal)
      let resu = ((indice*valor).toFixed(2))
      setValorConvertido(resu)
    } catch (error){
      setValorConvertido(`Erro: ${error.message}`)
    }
  }
  const limparResultado = () =>{
    setValorConvertido('')
    setValorOriginal('3')
    setMoedaOrigem('BRL')
    setMoedaDestino('USD')
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#2874A6", justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontWeight: "bold", textAlign: 'center', alignSelf: 'center', fontSize: 35, paddingBottom: 40, color:'#FFFFFF'}}>Conversor de Moedas</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: '#FFFFFF', fontSize: 30, }}>Moeda 1:</Text>
          <View style={{ borderColor: '#FFFFFF', borderStyle:'solid', borderWidth: 1, borderRadius: 9 }}>
            <Picker
              selectedValue={moedaOrigem}
              onValueChange={(itemValue, itemIndex) => setMoedaOrigem(itemValue)}
              style={{ width: 200, color: "#FFFFFF" }}
            >
              <Picker.Item label="Real Brasileiro" value="BRL" />
             <Picker.Item label="Dolar Americano" value="USD" />
              <Picker.Item label="Ouro" value="XAU" />
              <Picker.Item label="Bitcoin" value="BTC" />
            </Picker>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: '#FFFFFF', fontSize: 30, }}>Moeda 2:</Text>
          <View style={{ borderColor: '#FFFFFF', borderStyle: "solid", borderWidth: 1, borderRadius: 9 ,}}>
            <Picker
              selectedValue={moedaDestino}
              onValueChange={(itemValue) => setMoedaDestino(itemValue)}
              style={{ width: 200, color: "#FFFFFF" }}
            >
              <Picker.Item label="Real Brasileiro" value="BRL" />
              <Picker.Item label="Dolar Americano" value="USD" />
              <Picker.Item label="Ouro" value="XAU" />
              <Picker.Item label="Bitcoin" value="BTC" />
            </Picker>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: '#FFFFFF' }}>Valor a ser convertido:  </Text>
          <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: 120, borderColor: '#FFFFFF', borderStyle: "solid", borderWidth: 2, borderRadius: 9 }}>
            <TextInput value={valorOriginal} onChangeText={setValorOriginal} style={{ color: '#FFFFFF' }} keyboardType='numeric'/>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
          <Pressable style={{ backgroundColor: '#1ABC9C', width: 125, borderRadius: 20, marginTop: 20, height: 30, justifyContent: 'center', alignItems: 'center', textAlign: 'center' }} onPress={buscarHandle}><Text style={{ color: "#FFFFFF" }}>Buscar valor</Text></Pressable>
          <Pressable style={{ backgroundColor: '#1E8449', width: 125, borderRadius: 20, marginTop: 20, height: 30, justifyContent: 'center', alignItems: 'center', textAlign: 'center' }} onPress={limparResultado}><Text style={{ color: "#FFFFFF" }}>Limpar valor</Text></Pressable>
        </View>
        <Text style={{ textAlign: 'center', color: "#fff" } }>{`Resultado: ${valorConvertido}`} </Text>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}
