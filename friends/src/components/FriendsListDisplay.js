import React from 'react';

export default function FriendsListDisplay(props) {

  return (
    <>
      {props.data.map(data => {
        return (
          <>
            <p>{data.name}</p>
            <p>{data.age}</p>
            <p>{data.email}</p>
          </>
        )
      })}
    </>
  )
}