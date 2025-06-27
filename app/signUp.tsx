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

export default function SignUp() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const router = useRouter();

  const handleSignup = () => {
    // Just navigation for now
    // router.push('/');
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
          <View style={{ width: '80%' }}>
            <Text style={{
              fontSize: 30,
              fontWeight: 'bold',
              color: '#000',
              marginBottom: 20
            }}>
              Create Account
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Full Name"
              placeholderTextColor="#666"
              onChangeText={(name) => setForm(prev => ({ ...prev, name }))}
            />

            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#666"
              keyboardType="email-address"
              onChangeText={(email) => setForm(prev => ({ ...prev, email }))}
            />

            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#666"
              secureTextEntry
              onChangeText={(password) => setForm(prev => ({ ...prev, password }))}
            />

            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              placeholderTextColor="#666"
              secureTextEntry
              onChangeText={(confirmPassword) => setForm(prev => ({ ...prev, confirmPassword }))}
            />

            <TouchableOpacity
              onPress={handleSignup}
              style={{
                backgroundColor: 'green',
                marginTop: 20,
                paddingVertical: 14,
                borderRadius: 6,
                alignItems: 'center'
              }}
            >
              <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>
                Sign Up
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push('/')}>
              <Text style={{ marginTop: 16, textAlign: 'center', color: 'blue' }}>
                Already have an account? Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = {
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginTop: 16,
    fontSize: 16,
    color: '#000',
    backgroundColor: 'lightgray',
  }
};
