import React from 'react'

export default function Button({children, type}) {

    const styles = {
        primary: 'px-8 py-3 rounded-xl bg-[#c1630b] text-[#fff] text-sm transition-colors duration-300 disabled:cursor-not-allowed inline-block tracking-wide cursor-pointer',
        flat: 'px-12 py-3 border-2 border-[#c1630b] text-[#c1630b] text-sm transition-colors duration-300 disabled:cursor-not-allowed inline-block tracking-wide cursor-pointer',
    }


  return (
    <button className={styles[type]}>{children}</button>
  )
}
