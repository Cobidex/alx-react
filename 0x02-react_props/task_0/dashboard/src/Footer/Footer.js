import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils.js';
import './Footer.css';

export default function Footer() {
    return (
        <>
          <div className='App-footer' role='contentinfo'>
            <p>{ `Copyright ${getFullYear()} - ${getFooterCopy(false)}`}</p>
          </div>
        </>
    );
}