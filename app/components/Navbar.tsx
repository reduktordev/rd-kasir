import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Navbar = () => {
  return (
    <View style={tw`flex-row p-4 justify-between items-center bg-white shadow-md`}>
      <TouchableOpacity style={tw`flex-row items-center`}>
        <Text style={tw`text-black font-bold text-lg mr-2`}>mY</Text>
        <Text style={tw`text-red-600 font-bold text-lg`}>Cashier</Text>
      </TouchableOpacity>
      
      <TouchableOpacity>
        <Icon name="account-circle" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;
