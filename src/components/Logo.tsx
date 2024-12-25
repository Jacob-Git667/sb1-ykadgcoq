import React from 'react';
import { StorvoLogo } from './StorvoLogo';

export function Logo() {
  return (
    <a href="#home" className="flex items-center space-x-2 group">
      <StorvoLogo />
    </a>
  );
}