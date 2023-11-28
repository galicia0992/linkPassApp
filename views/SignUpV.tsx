import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Input, InputField, Button } from '@gluestack-ui/themed'
import postNewUser from '../api/postNewUser'

const Choose = ():JSX.Element => {
const [email, setEmail] = useState<string>("")
  return (
    <View>
      <Input>
      <InputField
      onChangeText={(value) => setEmail(value)}
      ></InputField>
      </Input>
      <Button
      onPress={() => postNewUser(email.replace(/\./g, '1'), "", "")}
      ><Text>alta</Text></Button>
      <Text>Sign up</Text>
    </View>
  )
}

export default Choose