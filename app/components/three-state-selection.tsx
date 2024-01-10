import { Button, ButtonGroup, Center } from "@chakra-ui/react";

class ThreeStateSelectorProperties {
  selection: boolean | null;
  onStateChange: (state: boolean | null) => void;
  labelA?: string;
  labelB?: string;
  colorSchemeA?: string;
  colorSchemeB?: string 
}

/**
 * A three state button that can signify true, false or undefined
 */
function ThreeStateSelection({ selection, onStateChange, labelA = "Y", labelB = "N", colorSchemeA = "green", colorSchemeB = "red" }: ThreeStateSelectorProperties) {
  function onStateSelect(state: boolean) {
    if (state == selection) {
      onStateChange(null);
    } else {
      onStateChange(state);
    }
  }
  
  return (
    <ButtonGroup>
      <Button colorScheme={colorSchemeA} variant={ selection == true ? "solid" : "outline"} size="xs" onClick={() => onStateSelect(true)}>{labelA}</Button>
      <Center>/</Center>
      <Button colorScheme={colorSchemeB} variant={ selection == false ? "solid" : "outline"} size="xs" onClick={() => onStateSelect(false)}>{labelB}</Button>
    </ButtonGroup>
  );
}

export default ThreeStateSelection;