import React from 'react'
import { useNavigate } from 'react-router-dom';
import Score from './Score'

function Submit() {
    const navigate = useNavigate();
  return (
    <div>
       <Score />
    </div>
  )
}

export default Submit