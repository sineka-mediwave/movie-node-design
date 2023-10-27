interface IFormInput {
  label: string;
  type: string;
  name: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const FormInputs: React.FC<IFormInput> = ({
  label,
  type,
  name,
  handleChange,
}) => {
  return (
    <label>
      {label}
      <input
        type={type}
        id={name}
        name={name}
        onChange={(e) => handleChange(e)}
        placeholder={label}
        required
      />
    </label>
  );
};

export default FormInputs;
