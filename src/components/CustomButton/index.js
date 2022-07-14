import React from 'react'
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import './styles.css'

const CustomButton = ({ text, style = {}, noIcon, icon = <AddIcon />, variant, color, handleClick = () => { } }) => {

  return (
    <Button
      onClick={handleClick}
      style={style}
      className="custom__button" size="medium" variant="contained" color="primary" startIcon={!noIcon && icon}>
      {text}
    </Button>
  )
}
export default CustomButton;
