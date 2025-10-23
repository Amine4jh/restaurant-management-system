import { useField } from "formik";

const CustomCheckbox = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <div className="w-full mt-5 flex gap-3 items-center">
        <input
          {...field}
          {...props}
          className={meta.touched && meta.error ? "input-error" : ""}
        />
        <label className="block text-start">{label}</label>
      </div>
      {meta.touched && meta.error && (
        <p className="text-lightRed text-sm mt-2 font-semibold">{meta.error}</p>
      )}
    </>
  );
};

export default CustomCheckbox;
