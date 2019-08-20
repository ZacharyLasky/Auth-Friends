import React from 'react';
import './FriendsListDisplay.scss'

export default function FriendsListDisplay(props) {

  return (
    <>
      {props.data.map(data => {
        return (
          <div className="card">
            <p>{data.name}</p>
            <p>{data.age}</p>
            <p>{data.email}</p>
          </div>
        )
      })}
    </>
  )
}