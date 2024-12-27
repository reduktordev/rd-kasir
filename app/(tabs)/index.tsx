import React, { useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { View, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import tw from 'tailwind-react-native-classnames';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Username:', username);
    console.log('Password:', password);
  };

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
          {/* Header */}
          <View style={tw`bg-red-600 py-12 items-center`}>
            <Text style={tw`text-white text-3xl font-bold`}>mY</Text>
            <Text style={tw`text-white text-4xl font-bold`}>Cashier</Text>
          </View>

          {/* Form */}
          <View style={tw`px-6 py-4`}>
            <Text style={tw`text-center text-xl font-bold mb-6`}>Log In</Text>

            {/* Username Input */}
            <TextInput
              style={tw`h-12 border border-gray-300 rounded-lg px-4 mb-4 bg-gray-200`}
              placeholder="Username"
              onChangeText={setUsername}
              value={username}
            />

            {/* Password Input */}
            <TextInput
              style={tw`h-12 border border-gray-300 rounded-lg px-4 mb-6 bg-gray-200`}
              placeholder="Password"
              secureTextEntry
              onChangeText={setPassword}
              value={password}
            />

            {/* Login Button */}
            <TouchableOpacity
              style={tw`bg-red-600 h-12 rounded-lg justify-center`}
              onPress={handleLogin}
            >
              <Text style={tw`text-white text-center font-bold text-lg`}>
                Masuk
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </GestureHandlerRootView>
  );
};

export default LoginScreen;
