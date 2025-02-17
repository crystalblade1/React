import React, { useState } from 'react';

const DynamicForm = () => {
  const [fields, setFields] = useState([{ label: '', value: '' }]);
  const [errors, setErrors] = useState({});

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedFields = [...fields];
    updatedFields[index][name] = value;
    setFields(updatedFields);
  };

  const addField = () => {
    setFields([...fields, { label: '', value: '' }]);
  };

  const removeField = (index) => {
    const updatedFields = fields.filter((_, i) => i !== index);
    setFields(updatedFields);
  };

  const validateFields = () => {
    let errors = {};
    let labels = new Set();
    fields.forEach((field, index) => {
      if (!field.label.trim()) {
        errors[`label_${index}`] = 'Label cannot be empty';
      } else if (labels.has(field.label)) {
        errors[`label_${index}`] = 'Label must be unique';
      } else {
        labels.add(field.label);
      }
    });
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (validateFields()) {
      console.log(fields);
    }
  };

  return (
    <div>
      <form>
        {fields.map((field, index) => (
          <div key={index}>
            <input
              type="text"
              name="label"
              placeholder="Label"
              value={field.label}
              onChange={(e) => handleChange(index, e)}
            />
            <input
              type="text"
              name="value"
              placeholder="Value"
              value={field.value}
              onChange={(e) => handleChange(index, e)}
            />
            <button type="button" onClick={() => removeField(index)}>Remove</button>
            {errors[`label_${index}`] && <div style={{ color: 'red' }}>{errors[`label_${index}`]}</div>}
          </div>
        ))}
        <button type="button" onClick={addField}>Add Field</button>
        <button type="button" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default DynamicForm;
