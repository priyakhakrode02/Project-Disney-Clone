import React from 'react'

const HeaderItem = ({name,Icon, onHover, isHovered}) => {
  return (
    <div className='text-white flex items-center space-x-3 p-2 rounded font-semibold cursor-pointer' 
    onMouseEnter={onHover} onMouseLeave={() => onHover(null)} >
      <div className='flex items-center'>
        <Icon/>
        {isHovered && <span className='ml-3'>{name}</span>}
        </div>
    </div>
  )
}

export default HeaderItem
