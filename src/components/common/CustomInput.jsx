import { useField } from "formik";

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="w-full sm:mt-5 mt-2">
      <label className="cursor-pointer block text-start font-semibold sm:text-base text-sm">
        {label}:
      </label>
      <input
        {...field}
        {...props}
        className={meta.touched && meta.error ? "input-error" : ""}
      />
      {meta.touched && meta.error && (
        <p className="text-lightRed text-sm mt-2 font-semibold">{meta.error}</p>
      )}
    </div>
  );
};

export default CustomInput;
