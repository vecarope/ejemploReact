import { ErrorMessage, Field, FieldArray } from 'formik';
import { RiDeleteBinLine } from 'react-icons/ri';
export const InputSelectArray = ({
  name,
  touched,
  errors,
  data,
  values,
  ...props
}) => {
  return (
    <div className="w-80 md:w-96">
      <FieldArray
        name={`${name}`}
        render={(arrayHelpers) => (
          <ul key={name.length}>
            {data &&
              data.map((element, index) => (
                <li
                  className="flex items-center w-5/6 py-2.5 md:py-1.5 mx-auto"
                  key={element.id + index}
                >
                  <span className="flex-1 font-sans">{element.name}</span>
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
                    {element.level ? (
                      <>
                        <option value={element.level}>
                          Actual: Nivel {element.level}
                        </option>
                        <option value={1}>Nivel 1</option>
                        <option value={2}>Nivel 2</option>
                        <option value={3}>Nivel 3</option>
                      </>
                    ) : (
                      <>
                        <option value={0}>Nivel</option>
                        <option value={1}>Nivel 1</option>
                        <option value={2}>Nivel 2</option>
                        <option value={3}>Nivel 3</option>
                      </>
                    )}
                  </Field>
                  {element.level || props.edit === true ? (
                    <button className="px-4">
                      <RiDeleteBinLine />
                    </button>
                  ) : null}
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
