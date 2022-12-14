import { ErrorMessage, Field } from 'formik';

export const InputField = ({ label, touched, errors, ...props }) => {
  return (
    <>
      {label && (
        <label
          htmlFor={props.name}
          className="block text-xl my-4 font-medium text-[#140B34]"
        >
          {label}{' '}
          {props.required ? <span className=" text-red-700">*</span> : null}
        </label>
      )}
      <Field
        {...props}
        id={props.name}
        name={props.name}
        className="mt-1 block w-full rounded-md border-[#E2F2FE]-200 bg-[#E2F2FE] shadow-sm focus:[#E2F2FE] focus:ring-[#E2F2FE]-300 sm:text-xl"
      />
      {touched && errors && (
        <ErrorMessage
          component="div"
          name={props.name}
          className="text-red-500"
        />
      )}
    </>
  );
};

export const InputSelect = ({ label, touched, errors, children, ...props }) => {
  return (
    <>
      {label && (
        <label
          htmlFor={props.name}
          className="block text-xl my-4 font-medium text-[#140B34]"
        >
          {label}{' '}
          {props.required ? <span className=" text-red-700">*</span> : null}
        </label>
      )}
      <Field
        {...props}
        as="select"
        id={props.name}
        defaultValue={false}
        className="mt-1 block w-full rounded-md border-[#E2F2FE]-200 bg-[#E2F2FE] shadow-sm focus:[#E2F2FE] focus:ring-[#E2F2FE]-300 sm:text-xl"
      >
        {children[1] ? (
          <>
            <option defaultValue={null}>Selecionar</option>
            {children.map((element, index) => (
              <option key={index} value={element}>
                {element}
              </option>
            ))}
          </>
        ) : (
          children
        )}
      </Field>
      {touched && errors && (
        <ErrorMessage
          component="div"
          name={props.name}
          className="text-red-500"
        />
      )}
    </>
  );
};

export const InputRadio = ({ label, touched, errors, children, ...props }) => {
  return (
    <>
      {label && (
        <label
          htmlFor={props.name}
          name={props.name}
          className="block  my-5 md:my-4 text-lg text-[#140B34]"
        >
          {label}
          {props.required ? <span className=" text-red-700">*</span> : null}
        </label>
      )}
      <Field {...props} as="radio" name={props.name} className="mr-4 my-2">
        {children[1] ? (
          <ul>
            {children.map((element, index) => (
              <li key={index}>
                <Field
                  type="radio"
                  name={props.name}
                  value={element}
                  id={element}
                  className="radio1 mr-4 my-2"
                />
                <label className=" text-base font-light text-[#232323]">
                  {element}
                </label>
              </li>
            ))}
          </ul>
        ) : (
          children
        )}
      </Field>
      {touched && errors && (
        <ErrorMessage
          component="div"
          name={props.name}
          className="text-red-500"
        />
      )}
    </>
  );
};

export const InputCheckbox = ({
  label,
  touched,
  errors,
  headText,
  children,
  ...props
}) => {
  return (
    <>
      {label && (
        <label
          htmlFor={props.name}
          name={props.name}
          id={props.name}
          className="block  my-5 md:my-4 text-lg text-[#140B34]"
        >
          {label}
          {props.required ? <span className=" text-red-700">*</span> : null}
        </label>
      )}
      {headText ? headText : null}
      <div className="form-control">
        <Field
          {...props}
          as="checkbox"
          id={props.name}
          name={props.name}
          className="label cursor-pointer mb-8"
        >
          {children[1] ? (
            <ul>
              {children.map((element, index) => (
                <li key={index}>
                  <input
                    type="checkbox"
                    name={props.name}
                    value={element}
                    id={element}
                    className=".checkbox mr-4 my-2"
                  />
                  <span className="label-text font-light text-base text-[#232323]">
                    {element}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            children
          )}
        </Field>
        {touched && errors && (
          <ErrorMessage
            component="div"
            name={props.name}
            className="text-red-500"
          />
        )}
      </div>
    </>
  );
};
