import React, {useState} from 'react'

const App = () => {

let colorHue=Math.floor(Math.random() *360)
let colorSaturation=Math.floor(Math.random()*100)
let colorBrightness=Math.floor(Math.random()*100)


const[hueSliderValue, setHueSliderValue]=useState(colorHue)
const[saturationSliderValue,setSaturationSliderValue]=useState(colorSaturation)
const[brightnessSliderValue,setBrightnessSliderValue]=useState(colorBrightness)
  

const updatehueSliderValue = eventData =>{
    if(eventData) {
      setHueSliderValue(eventData.target.value)
    }
  }

  const updatesaturationSliderValue = eventData =>{
    if(eventData) {
      setSaturationSliderValue(eventData.target.value)
    }
  }

  const updatebrightnessSliderValue = eventData =>{
    if(eventData) {
      setBrightnessSliderValue(eventData.target.value)
    }
  }

  const change = () => {
    colorHue=Math.floor(Math.random() *360)
    colorSaturation=Math.floor(Math.random()*100)
    colorBrightness=Math.floor(Math.random()*100)
    setHueSliderValue(colorHue)
    setSaturationSliderValue(colorSaturation)
    setBrightnessSliderValue(colorBrightness)
  }



  return (
    <>
      <section className="output" style={{backgroundColor: "hsl(" + hueSliderValue + ", " + saturationSliderValue + "%, " + brightnessSliderValue + "%)"}}>
      <h1>hello</h1>
      </section>

      <section class="slider-box">
      <section class="hueslider">
      <input type="range" min="1" max="360" value={hueSliderValue} class="myslider" id="hueSliderRange" onChange={updatehueSliderValue}></input>
      <p>hue value: <span id="demo">{hueSliderValue}</span></p>
      </section>


      <section class="saturationslider">
      <input type="range" min="1" max="100" value={saturationSliderValue} class="myslider" id="saturationSliderRange" onChange={updatesaturationSliderValue}></input>
      <p>saturation value: <span id="demo2">{saturationSliderValue}</span></p>
      </section>

      <section class="brightnessslider">
      <input type="range" min="1" max="100" value={brightnessSliderValue} class="myslider" id="brightnessSliderRange" onChange={updatebrightnessSliderValue}></input>
      <p>brightness value: <span id="demo2">{brightnessSliderValue}</span></p>
      </section>

      <section class="change-button">
      <button onClick={change}>Change Color</button>
      </section>
      </section>
    </>
  )
}

export default App
