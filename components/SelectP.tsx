import { View, Text } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { ChevronDownIcon, Icon, Select, SelectBackdrop, SelectContent, SelectDragIndicator, SelectDragIndicatorWrapper, SelectIcon, SelectInput, SelectItem, SelectPortal, SelectTrigger } from '@gluestack-ui/themed'

interface Props {
  setSelectedCat:any,
  setShowErrCat: any
}

const SelectP = ({setSelectedCat, setShowErrCat}: Props):JSX.Element => {
  
  return (
    
    <Select onValueChange={(value) => {setSelectedCat(value), setShowErrCat(false)}}>
    <SelectTrigger variant="outline" size="md" >
      <SelectInput placeholder="Github" />
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
          label="Desarrollo"
          value="dev"
          isDisabled={true}
        />
        <SelectItem label="Github" value="Github" />
        <SelectItem label="Deploys" value="Deploys" />
        <SelectItem
          label="Librerias"
          value="Librerias"
        />
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
          label="Sitios Web"
          value="Sitios Web"
          isDisabled={true}
        />
        <SelectItem
          label="Otros"
          value="Otros"
        />
      </SelectContent>
    </SelectPortal>
  </Select>

  )
}

export default SelectP