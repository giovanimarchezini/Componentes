
const Label = ({label, labelFor, ativo, value, className}) => {
  return (
    <label label={label} htmlFor={labelFor} className={`${ativo || value!=='' ? 'ativo' : ''} ${className}`}>
      {label}
    </label>
  )
}

export default Label;
