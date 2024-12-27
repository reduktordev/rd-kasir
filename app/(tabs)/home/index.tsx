import React, { useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { View, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Navbar from '@/app/components/Navbar';
import DatePicker from '@/app/components/Date';


const Home = () => {
  

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={tw`flex-1`}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          contentContainerStyle={tw`flex-grow bg-gray-100`}
          keyboardShouldPersistTaps="handled"
        >
            <View style={tw`mb-4`}>
                <Navbar />
            </View>
            <View style={tw`mb-4`}>
                <DatePicker />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </GestureHandlerRootView>
  );
};

export default Home;
