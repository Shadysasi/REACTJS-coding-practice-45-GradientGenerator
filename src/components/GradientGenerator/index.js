import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  GradientGeneratorContainer,
  GradientResponsiveContainer,
  Heading,
  DirectionsDescription,
  GradientDirectionList,
  ColorsPickersDescription,
  ColorPickerContainer,
  CustomInputAndColorContainer,
  ColorValue,
  ColorInput,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    activeGradientDirection: gradientDirectionsList[0].value,
    fromColorInput: '#8ae323',
    toColorInput: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value},#8ae323,#014f7b`,
  }

  onGenerate = () => {
    const {activeGradientDirection, fromColorInput, toColorInput} = this.state
    this.setState({
      gradientValue: `to ${activeGradientDirection},${fromColorInput},${toColorInput}`,
    })
  }

  onChangeToColor = event => {
    this.setState({toColorInput: event.target.value})
  }

  onChangeFromColor = event => {
    this.setState({fromColorInput: event.target.value})
  }

  clickGradientDirectionItem = direction => {
    this.setState({activeGradientDirection: direction})
  }

  render() {
    const {
      fromColorInput,
      toColorInput,
      activeGradientDirection,
      gradientValue,
    } = this.state
    return (
      <GradientGeneratorContainer
        gradientValue={gradientValue}
        data-testid="gradientGenerator"
      >
        <GradientResponsiveContainer>
          <Heading>Generate a CSS Color Gradient</Heading>
          <DirectionsDescription>Choose Direction</DirectionsDescription>
          <GradientDirectionList>
            {gradientDirectionsList.map(eachDirection => (
              <GradientDirectionItem
                key={eachDirection.directionId}
                gradientDirectionDetails={eachDirection}
                clickGradientDirectionItem={this.clickGradientDirectionItem}
                isActive={activeGradientDirection === eachDirection.value}
              />
            ))}
          </GradientDirectionList>
          <ColorsPickersDescription>Pick the Colors</ColorsPickersDescription>
          <ColorPickerContainer>
            <CustomInputAndColorContainer>
              <ColorValue>{fromColorInput}</ColorValue>
              <ColorInput
                type="color"
                onChange={this.onChangeFromColor}
                value={fromColorInput}
              />
            </CustomInputAndColorContainer>
            <CustomInputAndColorContainer>
              <ColorValue>{toColorInput}</ColorValue>
              <ColorInput
                type="color"
                onChange={this.onChangeToColor}
                value={toColorInput}
              />
            </CustomInputAndColorContainer>
          </ColorPickerContainer>
          <GenerateButton onClick={this.onGenerate}>Generate</GenerateButton>
        </GradientResponsiveContainer>
      </GradientGeneratorContainer>
    )
  }
}
export default GradientGenerator
