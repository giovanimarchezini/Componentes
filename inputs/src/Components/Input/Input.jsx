

const InputElement = ({type, placeholder, value, onBlur, onFocus, id, name, onChange}) => {
  
  return (
    <input 
    type={type} 
    placeholder={placeholder} 
    id={id}
    name={name}
    onBlur={onBlur}
    onFocus={onFocus}
    value={value}
    onChange={onChange}
    />
  )
}

export default InputElement;
