// Write your code here

import {useState} from 'react'
import {MainContainer, Img, Para, Buttton} from './styledComponents'

const Unlock = () => {
  const [lock, setLock] = useState(true)
  const onClickBtn = () => {
    setLock(prevLock => !prevLock)
  }
  return (
    <MainContainer>
      {lock ? (
        <>
          <Img
            src="https://assets.ccbp.in/frontend/hooks/lock-img.png"
            alt="lock"
          />
          <Para>Your device is locked</Para>
          <Buttton onClick={onClickBtn}>Unlock</Buttton>
        </>
      ) : (
        <>
          <Img
            src="https://assets.ccbp.in/frontend/hooks/unlock-img.png"
            alt="unlock"
          />
          <Para>Your device is unlocked</Para>
          <Buttton onClick={onClickBtn}>Lock</Buttton>
        </>
      )}
    </MainContainer>
  )
}

export default Unlock
