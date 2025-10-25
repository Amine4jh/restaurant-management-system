import { Form, Formik } from "formik";
import CustomInput from "../../../common/CustomInput";
import { addMealSchema } from "../../../../schemas";
import CustomFileInput from "../../../common/CustomFileInput";
import CustomSelect from "../../../common/CustomSelect";

const onSubmit = async (values, actions) => {
  console.log(values);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const AddMenuForm = () => {
  return (
    <Formik
      initialValues={{
        image: "",
        name: "",
        category: "",
        description: "",
        price: "",
      }}
      validationSchema={addMealSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="p-10 bg-dark rounded shadow-2xl w-full mx-auto text-beige">
          <h1 className="md:text-4xl text-3xl font-bold text-center text-beige mb-15">
            Add New Meal
          </h1>
          <CustomFileInput label="Image" name="image" />
          <CustomInput
            label="Name"
            name="name"
            type="text"
            placeholder="Enter meal name..."
          />
          <CustomSelect
            label="Category"
            name="category"
            placeholder="Select meal category..."
          >
            <option value="">Please select meal category...</option>
            <option value="burger">Burger</option>
            <option value="crepe">Crepe</option>
            <option value="pizza">Pizza</option>
          </CustomSelect>
          <CustomInput
            label="Description"
            name="description"
            type="text"
            placeholder="Enter meal description..."
          />
          <CustomInput
            label="Price ($)"
            name="price"
            type="number"
            placeholder="Enter meal price..."
          />
          <button
            disabled={isSubmitting}
            type="submit"
            className="bg-primary border-2 border-transparent py-3 text-beige font-bold w-full mt-10 rounded transition duration-150 ease hover:bg-transparent hover:text-primary hover:border-primary cursor-pointer"
          >
            Add
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default AddMenuForm;
