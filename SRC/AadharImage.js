import React, { useEffect, useState } from 'react'
import { Pressable, View, Text, Image,Button } from 'react-native'
//import { Card } from 'react-native-paper'
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';


const AadharImageAdd = () => {
    const [image1, setImage1] = useState('')

    const onPress = () => {
        onHandle()
        pickImage()
    }
    const onHandle = async () => {
        const userImage1 = { image:image1 }
        await AsyncStorage.setItem('userImage1', JSON.stringify(userImage1))
        console.log('saved')
    }

    //useEffect(()=>{},[])

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage1(result.uri);
        }
    };
    return (


        <View style={{ flex: 1 }}>
             <Pressable
                style={{ height: 150, alignItems: 'center', borderStyle: 'dashed', borderColor: 'grey', borderWidth: 1, justifyContent: 'center' }}
                //onPress={() => console.log("Image")}
                onPress={onPress}

            >
                <View style={{width:'80%',height:90}}>
                <Text style={{ alignSelf: 'center', color: 'orange' }}>+Add  ID Proof Document</Text>
                
                {image1 && <Image source={{ uri: image1 }} style={{ width: "100%", height: 120 }} />}
                </View>
               
            </Pressable>
          
            

        </View>

    )
}

export default AadharImageAdd
