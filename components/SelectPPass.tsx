import { View, Text } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { ChevronDownIcon, Icon, Select, SelectBackdrop, SelectContent, SelectDragIndicator, SelectDragIndicatorWrapper, SelectIcon, SelectInput, SelectItem, SelectPortal, SelectTrigger } from '@gluestack-ui/themed'

interface Props {
  setSelectedCat:any,
}

const SelectPPass = ({setSelectedCat}: Props):JSX.Element => {
  
  return (
    
    <Select onValueChange={(value) => setSelectedCat(value)}>
    <SelectTrigger variant="outline" size="md" >
      <SelectInput placeholder="Dominio" />
      <SelectIcon mr="$3">
        <Icon as={ChevronDownIcon} />
      </SelectIcon>
    </SelectTrigger>
    <SelectPortal>
      <SelectBackdrop/>
      <SelectContent>
        <SelectDragIndicatorWrapper>
          <SelectDragIndicator />
        </SelectDragIndicatorWrapper>
        <SelectItem
          label="Dominio"
          value="dom"
          isDisabled={true}
        />
        <SelectItem label="Administrador" value="Administrador" />
        <SelectItem label="Personal" value="Personal" />
        
        <SelectItem
          label="Redes sociales"
          value="Redes sociales"
          isDisabled={true}
        />
        <SelectItem
          label="Facebook"
          value="Facebook"
        />
        <SelectItem
          label="Youtube"
          value="Youtube"
        />
        <SelectItem
          label="X"
          value="X"
        />
        <SelectItem
          label="Instagram"
          value="Instagram"
        />
         <SelectItem
          label="Correo"
          value="Correo"
          isDisabled={true}
        />
        <SelectItem
          label="Gmail"
          value="Gmail"
        />
        <SelectItem
          label="Outlook"
          value="Outlook"
        />
        <SelectItem
          label="Yahoo"
          value="Yahoo"
        />
      </SelectContent>
    </SelectPortal>
  </Select>

  )
}

export default SelectPPass