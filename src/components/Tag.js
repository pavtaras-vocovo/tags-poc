import st from './Tag.module.css'

export function Tag({ children, onClick, onClose, background }) {
  return (
    <span className={st.block} style={{ background }}>
      <span className={st.content} onClick={() => onClick && onClick()}>
        {children}
      </span>
      {onClose && <span className={st.close} onClick={() => onClose()} />}
    </span>
  )
}
