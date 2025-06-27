import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground
} from 'react-native';
import { useRouter } from 'expo-router';

export default function LoginPage() {
  const [input, setInput] = useState({
    email: '',
    password: ''
  });

  const router = useRouter();

  const handleLogin = () => {
    // For now, just navigating to another page without real login
    router.push('/signUp');
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ImageBackground
        source={{
          uri: 'https://plus.unsplash.com/premium_photo-1701534008693-0eee0632d47a?fm=jpg&q=60&w=3000'
        }}
        style={{ height: '100%', width: '100%' }}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ height: 400, width: '80%' }}>
            <Text style={{
              fontSize: 30,
              fontWeight: 'bold',
              color: '#000'
            }}>
              Welcome Back!
            </Text>

            <TextInput
              style={{
                borderWidth: 1,
                borderColor: '#999',
                borderRadius: 6,
                paddingHorizontal: 12,
                paddingVertical: 10,
                marginTop: 24,
                fontSize: 16,
                color: '#000',
                backgroundColor: 'lightgray'
              }}
              placeholder="Email"
              placeholderTextColor="#666"
              keyboardType="email-address"
              onChangeText={(email) => setInput(prev => ({ ...prev, email }))}
            />

            <TextInput
              style={{
                borderWidth: 1,
                borderColor: '#999',
                borderRadius: 6,
                paddingHorizontal: 12,
                paddingVertical: 10,
                marginTop: 24,
                fontSize: 16,
                color: '#000',
                backgroundColor: 'lightgray'
              }}
              placeholder="Password"
              placeholderTextColor="#666"
              secureTextEntry
              onChangeText={(password) => setInput(prev => ({ ...prev, password }))}
            />

            <TouchableOpacity
              onPress={handleLogin}
              style={{
                backgroundColor: 'red',
                marginTop: 30,
                paddingVertical: 14,
                borderRadius: 6,
                alignItems: 'center'
              }}
            >
              <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
