import React from 'react';

import './langdisplay.css';

import LangTile from '../LangTile/LangTile.js';

function LangDisplay(props) {
  return (
    <div className='langdiv'>
    {
      props.langs.map(item => <LangTile lang={item} />)
    }
    </div>
  )
}

export default LangDisplay;