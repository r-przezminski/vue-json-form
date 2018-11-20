const schema = [{
  fieldType: "SelectList",
  name: "title",
  multi: false,
  label: "Title",
  options: ["Ms", "Mr", "Mx", "Dr", "Madam", "Lord"]
}, {
    fieldType: "TextInput",
    placeholder: "First Name",
    label: "First Name",
    name: "firstName"
  }, {
    fieldType: "TextInput",
    placeholder: "Last Name",
    label: "Last Name",
    name: "lastName"
  }, {
    fieldType: "NumberInput",
    placeholder: "Age",
    label: "Age",
    name: "age",
    minVaule: 0
  }];

  export default schema;