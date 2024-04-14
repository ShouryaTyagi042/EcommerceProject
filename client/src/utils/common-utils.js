import React from 'react'

export function addEllipsis(text, limit = 50 ) {
    if (text.length > limit) {
      return text.substring(0, limit) + '...';
    } else {
      return text;
    }
  }
