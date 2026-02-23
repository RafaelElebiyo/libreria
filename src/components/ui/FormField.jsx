export function FormField({ label, id, type = 'text', placeholder, required = false }) {
  return (
    <label className="form-field" htmlFor={id}>
      <span>{label}</span>
      <input id={id} name={id} type={type} placeholder={placeholder} required={required} />
    </label>
  );
}
