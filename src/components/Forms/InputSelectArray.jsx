import { ErrorMessage, Field, FieldArray } from 'formik';
export const InputSelectArray = ({
  name,
  touched,
  errors,
  data,
  values,
  ...props
}) => {
  return (
    <div className="w-96">
      <FieldArray
        name={`${name}`}
        render={(arrayHelpers) => (
          <ul>
            {data &&
              data.map((element, index) => (
                <li
                  className="flex items-center w-5/6 py-2.5 md:py-1.5 mx-auto"
                  key={element.id}
                >
                  <span className="flex-1 px-2 font-sans">{element.name}</span>
                  <Field
                    {...props}
                    as="select"
                    id={element.id}
                    name={element.name}
                    defaultValue={false}
                    onChange={(e) => {
                      let index = values[name].findIndex(
                        (lang) => lang.id === element.id
                      );
                      if (index >= 0) {
                        arrayHelpers.remove(index);
                      }
                      arrayHelpers.push({ ...element, level: e.target.value });
                      console.log(values[name]);
                    }}
                    className="flex-1 bg-[#E2F2FE] border-[#140B34] rounded-md form-select form-select-sm
                            appearance-none
                            block
                            px-2
                            py-1
                            text-sm
                            font-normal
                            text-gray-700
                           bg-clip-padding bg-no-repeat
                            border border-solid
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  >
                    <option value={0}>Nivel</option>
                    <option value={1}>Nivel 1</option>
                    <option value={2}>Nivel 2</option>
                    <option value={3}>Nivel 3</option>
                  </Field>
                </li>
              ))}
          </ul>
        )}
      />
      {touched && errors && (
        <ErrorMessage
          component="div"
          name={props.id}
          className="text-red-500"
        />
      )}
    </div>
  );
};
