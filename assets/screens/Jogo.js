import { View, Text, ImageBackground, StyleSheet } from "react-native";

const fotoFundo = require('../images/fundo.jpg')

const pontuacao = 0



const Jogo = (props) =>{

    const celulas = []
    for (let i =0; i<9;i++){
        celulas.push(<View style={estilos.celula}></View>)
    }
    const linhas = []
    for (let i =0; i<9;i++){
        linhas.push(
        <View style={estilos.linha}>
            {celulas}
        </View>
        )
    }


    return(
        <ImageBackground source={fotoFundo}>
            <View style={estilos.main}>
                <View style={estilos.pontuacao}>
                    <Text style={estilos.pontuacao.texto}>{pontuacao}</Text>
                </View>
                <View style={estilos.mapa}>
                    {linhas}
                </View>
                <View style={{flex:2}}></View>
            </View>
        </ImageBackground>
    )
}

const estilos = StyleSheet.create({
    main:{
        height:'100%',
        width:'100%'
    },
    pontuacao:{
        flex:2,
        alignItems:'center',

        texto:{
            height:'80%',
            fontSize:20,
            textAlignVertical:'bottom',
            fontWeight:'bold',

        }
    },

    mapa:{
        flex:6,
        alignSelf: 'stretch',
        height:100,

    },
    linha:{
        alignSelf:'stretch',
        flexDirection:'row',
        justifyContent:'center'
    },
    celula:{
        borderWidth:1,
        borderColor:'black',
        flex:1,
        maxWidth:40,
        aspectRatio:1,
    }


})

export default Jogo