/**
 * Created by xiteng on 2017/5/17.
 */
import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    PixelRatio
} from 'react-native';


class TabItem extends Component{
    render(){
        let {title,selected,callback} = this.props
        let bgColor = selected ? 'black' : '#fff'
        return <TouchableOpacity
            onPress={callback}
            style={{justifyContent:'center'}}>
            <View style={{paddingVertical:12}}>
                <Text style={{textAlign:'center'}}>{title}</Text>
            </View>
            <View style={[styles.line,{backgroundColor:bgColor}]}/>
        </TouchableOpacity>
    }
}


export default class ItemTabBar extends Component{

    constructor(props){
        super(props)
        this.state = {
            selectedIndex:0
        }
    }

    changeSelectedIndex(index){
        this.setState({
            selectedIndex:index
        })
    }

    render(){
        let {items,callback,pop} = this.props
        return <View style={[{height:40},styles.borderBottom]}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <View style={{marginHorizontal:10}}>
                    <TouchableOpacity
                        onPress={pop}
                        style={[{paddingHorizontal: 10}]}>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-around',flex:1}}>
                    {
                        items.map((item,index)=>{
                            return <View style={{marginRight:10,justifyContent:'space-around'}}  key={index}>
                                <TabItem title={item} selected={index==this.state.selectedIndex} callback={()=>{
                                    callback(index)
                                }}/>
                            </View>
                        })
                    }
                </View>
                <View style={{marginHorizontal:10}}>

                </View>
            </View>
        </View>
    }
}


const styles = {
    borderBottom: {
        borderBottomColor: '#f5f5f5',
        borderBottomWidth: 1 / PixelRatio.get()
    },
    line:{
        height:1,
        width:40,
    }
}