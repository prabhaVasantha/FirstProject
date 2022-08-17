import { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import CustomButton from './CustomButton';
import ImageAdd from './ImageScreen';
import CustomInput from './TextInputScreen';
import Summary from './Summary';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomCheckBox from './CheckBox';
import AadharImageAdd from './AadharImage';

const AddressScreen = () => {
    const [address1, setAddress1] = useState('')
    const [address2, setAddress2] = useState("")
    const [town, setTown] = useState("")
    const [state, setState] = useState('')
    const [aadharno, setAadharno] = useState("")
    //const [fname,setFname]=useState(route.params.fname)
    const onPress = () => {
        onHandle()
        onNavigate()
    }



    const onNavigate = () => {
        navigation.navigate('Skills')
    }//, { address1:address1,address2:address2,town:town,state:state,aadharno:aadharno })}

    const onHandle = async () => {
        const userAddress = { address1: address1, address2: address2, town: town, state: state, aadharno: aadharno }
        await AsyncStorage.setItem('userAddress', JSON.stringify(userAddress))
        console.log('saved')
    }


    const navigation = useNavigation()
    const route = useRoute()
    //const {fname} = route.params

    return (

        <View style={{ backgroundColor: 'white', justifyContent: 'center', marginBottom: 10 }}>
            <View style={{ marginBottom: 5 }}>
                <Text style={{ alignSelf: 'center', paddingHorizontal: 5, fontSize: 15, color: 'orange' }}>Permanent Address</Text>
            </View>
            <CustomInput label='Address Line 1' value={address1} onChangeText={setAddress1} />
            <CustomInput label='Address Line 2' value={address2} onChangeText={setAddress2} />
            <CustomInput label='Town' value={town} onChangeText={setTown} />
            <CustomInput label='state' value={state} onChangeText={setState} />


            <View style={{ marginBottom: 5 }}>
                <Text style={{ alignSelf: 'center', paddingHorizontal: 5, fontSize: 15, color: 'orange' }}>Current Address</Text>
            </View>
<CustomCheckBox/>

            <View style={{ marginBottom: 10 }}>
                <Text style={{ alignSelf: 'center', paddingHorizontal: 5, fontSize: 15, color: 'orange' }}>Aadhar Details</Text>
                <CustomInput label='Aadhar Number' value={aadharno} onChangeText={setAadharno} />
                <View style={{marginTop:10}}>
               <AadharImageAdd/>
                </View>
                
                
                <CustomButton label='Save and Continue' onPress={onPress} />
            </View>
        </View>

    )
}

export default AddressScreen