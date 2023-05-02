import React from 'react'
import Badge from 'react-bootstrap/Badge';


const MyBadge = ({str, color}) => {
  return (
    <Badge bg={color}>{str}</Badge>
  )
}

export default MyBadge