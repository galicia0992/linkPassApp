import { View, Text } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { ChevronDownIcon, Icon, Select, SelectBackdrop, SelectContent, SelectDragIndicator, SelectDragIndicatorWrapper, SelectIcon, SelectInput, SelectItem, SelectPortal, SelectTrigger } from '@gluestack-ui/themed'

interface Props {
  setSelectedCat:any
}

const SelectP = ({setSelectedCat}: Props):JSX.Element => {
  
  return (
    
    <Select onValueChange={(value) => setSelectedCat(value)}>
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
        <SelectItem label="Github" value="github" />
        <SelectItem label="Deploys" value="deploys" />
        <SelectItem
          label="Librerias"
          value="Librerias"
        />
        <SelectItem
          label="Redes sociales"
          value="sociales"
          isDisabled={true}
        />
        <SelectItem
          label="Facebook"
          value="facebook"
        />
        <SelectItem
          label="Youtube"
          value="youtube"
        />
        <SelectItem
          label="X"
          value="x"
        />
        <SelectItem
          label="Instagram"
          value="instagram"
        />
         <SelectItem
          label="Sitios Web"
          value="web"
          isDisabled={true}
        />
        <SelectItem
          label="Otros"
          value="otros"
        />
      </SelectContent>
    </SelectPortal>
  </Select>

  )
}

export default SelectP