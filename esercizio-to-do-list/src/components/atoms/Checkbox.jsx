function Checkbox({ checked, onChange, id, label }) {
  return (
    <label htmlFor={id} className="checkbox-wrapper">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      {label && <span>{label}</span>}
    </label>
  );
}

export default Checkbox;
