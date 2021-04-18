import React, {useState} from 'react';
import {View, Button, Text, ScrollView, Dimensions, StyleSheet} from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner';


const ReactTraining = (props) =>{
    const [checkPermission, setPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [showCamera, setShowCamera] = useState(false);
    const [scannedData, setScannedData] = useState(null)

    const requestPerm = async() => {
        const cameraStatus = await BarCodeScanner.requestPermissionsAsync();
        setPermission(cameraStatus);
    };

     const runCameraScanner = () => {
         const checkIfPermission = checkPermission === 'granted'; 

         if (checkIfPermission){
            setShowCamera(True);
         }

         return "fails";
     };

     const handleScann = (type, data) => {
         setScannedData(true);
         setScannedData(`Code type: ${type} || Data: ${data}`)
     };
    
    return (
        <View style = {{flex:1, marginTop: 100}}>
            
            <View 
            style = {{
                width:Dimensions.get("window").width, 
                height: Dimensions.get("window").height - 400 
                }}
                >
                <BarCodeScanner 
                onBarCodeScanned={
                    scanned ? undefined: ({type, data})=> handleScann(type, data)} 
                style = {StyleSheet.absoluteFillobject}

                style = {{
                    width:Dimensions.get("window").width, 
                    height: Dimensions.get("window").height - 400 
                    }}
            />
            </View>
            <Button title= "Scan again" onPress={()=> setScanned()} />
        <Button title= "Request Permission" onPress={()=> requestPerm()} />
        <Button title= "Launch Camera" onPress={()=> runCameraScanner()} />
        <ScrollView>
            <View>
                <Text style={{textAlign:'center'}}>
                    Result
                </Text>
                <Text>
                    {scannedData}
                </Text>
            </View>
        </ScrollView>
        </View>
    );
};

export default ReactTraining;