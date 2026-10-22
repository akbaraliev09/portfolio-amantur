import { useState } from 'react'

export default function Avatar({ initials }) {
  const [broken, setBroken] = useState(false)
  return (
    <div className="avatar">
      {broken ? <span>{initials}</span> : <img src="/images/photo.jpg" alt="" onError={() => setBroken(true)} />}
    </div>
  )
}
