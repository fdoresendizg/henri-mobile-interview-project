import React from 'react';
import { 
    View, 
    TouchableOpacity, 
    Text, 
    StyleSheet 
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

const UserCard = props => {
    shouldComponentUpdate = ()=> {
        return false;
    }
    
    const { user : {item}  } = props;
    //console.log("props ", props);
    //console.log("item ", item);

    return (
        <View>
            <TouchableOpacity>
                <View style={styles.container}>
                    <View style={styles.leftContainer}>
                        <View style={{ width: 40, height: 40}}></View>
                    </View>
                    <View style={styles.centerContainer}>
                        <View style={styles.textContainer}>
                            <Text style={styles.textNameStyle}>{`${item.name}`}</Text>
                            <Text style={styles.textEmailStyle}>{`${item.email}`}</Text>
                        </View>
                    </View>
                    <View style={styles.rightContainer}>
                        <Icon name="phone" size={25} color="#28a745" regular/>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        minHeight: 44,
        height: 63,
        borderColor: '#515151',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    leftContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 2,
        paddingLeft: 13,
    },
    centerContainer: {
        marginLeft: 18,
        flexDirection: 'row',
        flex: 20,              
    },
    rightContainer: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        flex: 5,
        paddingRight: 13,
    },
    textContainer: {
        justifyContent: 'center',
        flexDirection: 'column',
        flex: 1,
    },
    textNameStyle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    textEmailStyle: {
        fontSize: 12,
    }, 
});

export default React.memo(UserCard);