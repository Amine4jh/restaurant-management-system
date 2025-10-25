import { useField } from "formik";

const CustomSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="w-full mt-5">
      <label className="cursor-pointer block text-start font-semibold">
        {label}:
      </label>
      <select
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

export default CustomSelect;
