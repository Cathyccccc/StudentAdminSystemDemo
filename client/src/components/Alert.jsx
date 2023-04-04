import React from 'react'

export default function Alert({alert}) {
  return (
    <div className={["alert", `alert-${alert.stat}`].join(" ")} role="alert">
      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
      {alert.text}
    </div>
  )
}
