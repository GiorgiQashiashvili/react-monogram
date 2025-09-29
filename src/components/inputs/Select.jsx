function Select({ options, defaultName }) {
  return (
    <select className="select-container">
      <option value="">{defaultName}</option>
      {options?.map((option) => {
        return (
          <option value="" key={option?.value}>
            {option?.name}
          </option>
        );
      })}
    </select>
  );
}

export default Select;
