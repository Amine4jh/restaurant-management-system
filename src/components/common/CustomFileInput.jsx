import { useField } from "formik";

const CustomFileInput = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);

  const handleChange = (e) => {
    const file = e.currentTarget.files[0];
    helpers.setValue(file);
  };

  return (
    <div className="w-full mt-5">
      <label className="cursor-pointer block text-start font-semibold">
        {label}:
      </label>
      <input
        type="file"
        name={field.name}
        onBlur={field.onBlur}
        onChange={handleChange}
        {...props}
        className={meta.touched && meta.error ? "input-error" : ""}
      />
      {meta.touched && meta.error && (
        <p className="text-lightRed text-sm mt-2 font-semibold">{meta.error}</p>
      )}
    </div>
  );
};

export default CustomFileInput;
