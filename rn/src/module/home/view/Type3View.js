import React from 'react'
import {Text, StyleSheet, View, Image} from "react-native";
import AppTheme from "../../../base/util/Theme";
import Device from "../../../base/util/Device";

/**
 * type=3的数据
 * 这个一个多个数据的gridView
 */
class Type3View extends React.Component {
    render() {
        let data = this.props.data;
        if (!data || data.length == 0) {
            return null;
        }
        let dataArray = [];
        data.forEach(function (element) {//循环数组
            let desc = element.desc;
            if (desc && desc.length > 0) {
                desc.forEach(function (ele) {
                    dataArray.push(ele)
                })
            }
        });
        if (!dataArray || dataArray.length == 0) {
            return null;
        }
        let members = dataArray.map((element, index) => {
            return this.renderItemForIndex(element, index);
        });
        return (
            <View style={style.outerBox}>
                {members}
            </View>
        )
    }

    renderItemForIndex(element, index) {
        return (
            <View key={index} style={[style.grid_item]}>
                <Image style={style.img} source={{uri: element.pic_url}}></Image>
                <Text style={style.txt_item_title}>{element.txt}</Text>
            </View>
        );
    }
}


const style = StyleSheet.create({
    grid_item: {
        backgroundColor: AppTheme.Color.white,
        width: Device.Screen.width / 4,
        height: 98,
        flexDirection: 'column',
        alignItems: 'center',
    },
    outerBox: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: Device.Screen.width,
    },
    img: {
        width: 46,
        height: 46,
        marginTop: 10
    },
    txt_item_title: {
        fontSize: 12,
        marginTop: 8,
        color: AppTheme.Color.txt_sub_h1
    }
});
export default Type3View