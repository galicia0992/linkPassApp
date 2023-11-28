import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Input, InputField, Button } from '@gluestack-ui/themed'
import postNewUser from '../api/postNewUser'
import createUser from '../api/createUser'

const Choose = ():JSX.Element => {
const [email, setEmail] = useState<string>("")
const [pass, setPass] = useState<string>("")

  return (
    <View>
      <Input
      variant="underlined"
      size="md"
      isDisabled={false}
      isInvalid={false}
      isReadOnly={false}
      >
      <InputField
      onChangeText={(value) => setEmail(value)}
      placeholder="Ingresa un email"
      keyboardType="email-address"
      ></InputField>
      </Input>
      <Input
      marginVertical={10}
      variant="underlined"
      size="md"
      isDisabled={false}
      isInvalid={false}
      isReadOnly={false}
      >
      <InputField
      onChangeText={(value) => setPass(value)}
      placeholder="Ingresa un email"
      keyboardType="email-address"
      ></InputField>
      </Input>
      <Button
      onPress={() => createUser(email, pass)}
      ><Text>alta</Text></Button>
      <Text>Sign up</Text>
    </View>
  )
}

export default Choose