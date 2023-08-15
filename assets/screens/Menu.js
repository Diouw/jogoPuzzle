import { StyleSheet, Text, View, ImageBackground, Button, TouchableOpacity } from "react-native"

const fotoFundo = require('../images/fundo.jpg')

const pontuacao = 10


const Menu = (props) =>{

    const goToJogo = ()=>{
        props.navigation.navigate('Jogo')
    }

    return(
        <ImageBackground source={fotoFundo}>
            <View style={estilos.main}>
                <View style={{flex:5}}></View>
                <View style={{flex:3}}>
                    <Text style={estilos.textoPrincipal}>Block Puzzle</Text>
                    <Text style={estilos.textoSecundario}>Maior pontuação geral</Text>
                    <Text style={estilos.textoPontos}>{pontuacao}</Text>
                </View>
                <View style={{flex:2}}>
                    
                    <TouchableOpacity style={estilos.botao} onPress={goToJogo}>
                        <Text style={estilos.botao.texto}>Novo Jogo</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </ImageBackground>
    )

}

const estilos = StyleSheet.create({
    main:{
        height:'100%',
        width:'100%',
    },
    textoPrincipal:{
        fontSize:40,
        fontWeight:'bold',
        color:'#c77b48',
        textAlign:'center'
        
    },
    textoSecundario:{
        fontSize:20,
        textAlign:'center'
    },
    textoPontos:{
        fontSize:40,
        fontWeight:'bold',
        textAlign:'center'
    },
    botao:{
        backgroundColor:'#eda97b',
        width:"70%",
        height:50,
        alignSelf:'center',
        alignItems:'center',
        borderRadius:20,
        
        texto:{
            height:'100%',
            fontSize:20,
            fontWeight:'bold',
            color:'#45200d',
            textAlignVertical:"center",
        }
    }
})


export default Menu