// we creating reusable modal component without any any framework or external library/dependencies

import { useState } from "react"
import styled from "styled-components"

const ModalBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  overflow: auto;
  background-color: rgba(0,0,0,0.5);
  width: 100%;
  height: 100%;
`
const ModalContainer = styled.div`
  background-color: wheat;
  padding: 24px;
  margin: 12% auto;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  max-width: 50%;
`

export const Modal = ({children}) => {
  const [show, setShow] = useState(false)
  return (
    <>
      <button onClick={() => setShow(true)}>show Modal</button>
     {show && (
        <ModalBackground onClick={()=>setShow(false)}>
          <ModalContainer onClick={e =>e.stopPropagation()}>
            <button onClick={()=>setShow(false)}>close Modal</button>
            {children}
          </ModalContainer>
        </ModalBackground>
     )}
    </>
  )
}