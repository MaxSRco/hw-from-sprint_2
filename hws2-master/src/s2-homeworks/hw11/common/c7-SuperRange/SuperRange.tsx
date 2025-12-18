import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
  return (
    <Slider
      value={props.value}
      sx={{ // стили для слайдера // пишет студент
        width: '140px',
        height: '4px',
        marginLeft: '22px',
        marginRight: '22px',
        '& .MuiSlider-rail': {
          backgroundColor: '#8B8B8B',
          borderColor: '#8B8B8B',
          borderWidth: 1
        },
        '& .MuiSlider-track': {
          backgroundColor: '#0C2',
          borderColor: '#0C2',
          borderWidth: 1
        },
        '& .MuiSlider-thumb': {
          width: 18,
          height: 18,
          border: '1px solid #0C2',
          backgroundColor: 'white',
          boxShadow: 'none'
        },
        '& .MuiSlider-thumb:hover': {
          boxShadow: 'none'
        },
        '& .MuiSlider-thumb::after': {
          content: '""',
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: 4,
          height: 4,
          borderRadius: '50%',
          border: '1px solid #0C2',
          backgroundColor: '#0C2',
          transform: 'translate(-50%, -50%)'
        },
        '& .MuiSlider-thumb.Mui-active': {
          boxShadow: 'none'
        }
      }}
      {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
    />
  )
}

export default SuperRange