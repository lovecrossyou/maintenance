/**
 * Created by xiteng on 2017/4/27.
 */
import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    PixelRatio
} from 'react-native';

export default class ItemCell extends Component{
    _leftIcon(){
        let {icon} = this.props
        if(icon&&icon.length>0){
            return <Icon name={icon} color="gray" size={28}/>
        }
        return null
    }

    render(){
        let {name,icon,desc,callback,editable} = this.props
        if(editable){

        }
        return <View>
            {this.props.child}
            <TouchableOpacity
                activeOpacity={1}
                onPress={callback}
                style={[{flexDirection:'row',backgroundColor:'#fff',justifyContent:'space-between',alignItems:'center'},styles.borderBottom]}>
                <View style={{paddingTop:15,paddingHorizontal:10}}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        {
                            this._leftIcon()
                        }
                        <Text style={styles.content}>{name}</Text>
                    </View>
                    <View style={{alignItems:'center',justifyContent:'center',paddingRight:10}}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Text style={styles.content}></Text>
                            <Text style={styles.content}></Text>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection:'row'}}>
                    <View style={{paddingHorizontal:10}}>
                        <Text style={styles.content}>{desc}</Text>
                    </View>
                    <Image source={require('../../assets/com/right_arrow.png')} style={{width:7,height:14,marginRight:10}}/>
                </View>
            </TouchableOpacity>
        </View>
    }
}


const styles = {
    title:{
        fontSize:15,
        fontWeight:'200'
    },
    content:{
        fontSize:14,
        fontWeight:'300',
        color:'gray',
    },
    borderBottom:{
        borderBottomColor:'#f5f5f5',
        borderBottomWidth:1/PixelRatio.get()
    }
}
