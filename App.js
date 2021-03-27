import React, { useEffect, useState } from 'react';
import {Container, Header, Content, Form, Item, Label, Title, Button} from 'native-base';
import {View, Text, Image, StyleSheet} from 'react-native';

export default App = () => {
  const [data, setData] = useState([]);  

  getInfo = () => {
    fetch('https://0q27loouph.execute-api.us-east-1.amazonaws.com/',{
      method: 'GET',
      headers: {
        'Accept':'application/json',
        'Content-Type':'application/json'
      }
    }).then((result) => {
      result.json().then((resp) =>{
        setData(resp)
      })
    })
    .catch((error) => console.error(error))
  }



  useEffect(() => {
    getInfo();
  }, []);



  return (
    <Container>
      <Header> 
        <Title style={styles.title}> Información Paciente </Title>
      </Header>
      <Content>
        <View style = {styles.container}>
          <Image source={{uri: data.image}} style={{ height:200, width: 200 }}></Image>
        </View>
        <Form style ={{marginTop:15}}>
              <Item fixedLabel>
                <Label style ={styles.etiquette}>Nombre</Label>
                <Text style={styles.texto}>{data.name}</Text>
              </Item>
              <Item fixedLabel>
                <Label style ={styles.etiquette}>Correo</Label>
                <Text style={styles.texto}>{data.email}</Text>
              </Item>
              <Item fixedLabel>
                <Label style ={styles.etiquette}>Teléfono</Label>
                <Text style={styles.texto}>{data.phone}</Text>
              </Item>
          </Form>
          <View style={{padding:20, marginTop:10}}>
            <Button block
              onPress={getInfo}
            >
              <Text style={styles.colorButton}>Actualizar</Text>
            </Button>
              
          </View>
      </Content>
    </Container>
  );
}

var styles = StyleSheet.create({
  etiquette: {
    fontSize:20,
    fontStyle:'italic',
  },
  colorButton: {
    color: 'white'
  },
  texto:{
    flex:1,
    fontSize: 14
  },
  container: {
    justifyContent: 'center', 
    alignItems: 'center', 
    marginTop:15
  },
  title: {
    margin: 10,
  }
});