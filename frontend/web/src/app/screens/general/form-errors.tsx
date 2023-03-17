import React from "react";

interface FormErrors {
  erros: { [key: string]: string }
}
export const FormErrors = ({ erros }: FormErrors) =>
  <div className='formErrors'>
    <ul className="list-disc ml-5">
      {Object.keys(erros).map((fieldName, i) => {
        if (erros[fieldName].length > 0) {
          return (
            <li className="text-sm italic text-red-500" key={i}>
              {erros[fieldName]}
            </li>
          )
        } else {
          return '';
        }
      })}
    </ul>

  </div>