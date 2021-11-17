import React,{useState} from 'react';
import DateRangePicker from 'react-bootstrap-daterangepicker';

const Question = ( props ) => {
    const [slider, setSlider] = useState({
        max: 100, 
        min: 0, 
        value: 0, 
        label: ''
    });

    const onSlide = () => {
        alert(slider.value);
    } 
  return (
   <div className="Question">
    <p>{props.data.type}</p>
{ (props.data.id==='1') && (
    <select value={props.data.options[0]}>
  <option value={props.data.options[0]}>{props.data.options[0]}</option>
  <option value={props.data.options[1]}>{props.data.options[1]}</option>
  <option value={props.data.options[2]}>{props.data.options[2]}</option>
  </select>
  )
}
{(props.data.id==='2') && (
    <input type="range" min={slider.min} max={slider.max} value={slider.value} 
    onChange={() => onSlide()} className="slider" id="myRange"></input>)
}
{(props.data.id ==='3') && (
    <DateRangePicker>
    <button type="button" className="btn btn-primary">
      click to open
    </button>
  </DateRangePicker>)
}
{(props.data.id==='4') && (
    <input type="text" name="text" />)
}
   </div>
  )
 };
 
 export default Question;