import React, { useState, useEffect } from 'react';
import { 
    View, 
    TouchableOpacity,
    Text, 
    StyleSheet,
    Alert
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import { useDispatch } from "react-redux";

import { deletePost as removePost } from '../../actions';
import { getUserById } from '../../actions/user-action';

const PostCard = props => {
    shouldComponentUpdate = ()=> {
        return false;
    }
    
    const [ user, setUser ] = useState({});
    const { post : {item}  } = props;
    const dispatch = useDispatch();

    useEffect(() => {
        const user = getUserById(item.userId);
        setUser(user);
    }, []);

    const performDelete = () => {
        dispatch(removePost(item.id));
    }

    const deletePost = () =>
        Alert.alert(
        "Delete Post",
        "Are you sure you want to delete this post?",
        [
            {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },            
            { text: "OK", onPress: performDelete }
        ],
        { cancelable: false }
        );

    return (
        <View>
            <TouchableOpacity>
                <View style={styles.container}>
                    <View style={styles.leftContainer}>
                        <View style={styles.textContainer}>
                            <Text style={styles.textTitleStyle}>{`${item.title}`}</Text>
                            <Text style={styles.textNameStyle}>{`${user.name}`}</Text>
                            <Text style={styles.textEmailStyle}>{`${user.email}`}</Text>
                            <Text style={styles.textContentStyle}>{`${item.body}`}</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={deletePost}>
                        <View style={styles.rightContainer}>
                            <Icon name="trash" size={25} color="#dc3545" regular/>
                        </View>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        minHeight: 44,
        borderColor: '#515151',
        borderBottomWidth: StyleSheet.hairlineWidth,
        paddingTop: 10,
        paddingBottom: 10,
    },
    leftContainer: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingLeft: 10,
        flex: 20,              
    },
    rightContainer: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex: 3,
        paddingRight: 10,
    },
    textTitleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    textContentStyle: {
        fontSize: 12,
    }, 
    textNameStyle: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    textEmailStyle: {
        fontSize: 10,
        marginBottom: 5,
    },        
});

export default React.memo(PostCard);