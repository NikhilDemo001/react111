import React from 'react'
import Style1 from './StyleSheet1.module.css'
import Style2 from './StyleSheet2.module.css'

export default function StyleSheet3() {
  return (
    <div>
      <h1 className={Style1.heading}> helloo css module</h1>
      <h1 className={Style2.heading}> helloo css module</h1>
    </div>
  )
}
