import { useField } from "formik";

const CustomCheckbox = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="w-full mt-5 flex gap-5 items-center">
      <input
        {...field}
        {...props}
        className={meta.touched && meta.error ? "input-error" : ""}
      />
      <label className="cursor-pointer block text-start">{label}</label>
      {meta.touched && meta.error && (
        <p className="text-lightRed text-sm mt-2 font-semibold">{meta.error}</p>
      )}
    </div>
  );
};

export default CustomCheckbox;
