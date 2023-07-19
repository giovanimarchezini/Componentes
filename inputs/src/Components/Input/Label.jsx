
const Label = ({label, labelFor, ativo, value}) => {
  return (
    <label label={label} htmlFor={labelFor} className={ativo || value!=='' ? 'ativo' : ''}>
      {label}
    </label>
  )
}

export default Label;
