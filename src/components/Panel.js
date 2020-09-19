import React, { useState } from "react";
import "./styles/mystyles.css";
import { InputGroup, FormControl, Button } from "react-bootstrap";

const Panel = () => {
  const [installment, setInstallment] = useState([]);
  const [months, setMonths] = useState(0);
  const [showinstallments, setshowinstallments] = useState(false);

  // Get installment value
  const installmentHandler = (event) => {
    setInstallment(event.target.value);
  };

  // Get months value
  const monthHandler = (event) => {
    setMonths(event.target.value);
  };

  // Make an array of installments by adding the values to installment array
  const makeInstallmentArray = () => {
    for (let i = 0; i < months; i++) {
      setInstallment((installment) => installment.concat(installment / months));
    }
    setshowinstallments(true);
  };

  // Display monthly installments on submit of values
  const monthlyInstallments = () => {
    return (
      <ol>
        {installment.map((element) => (
          <li>{element}</li>
        ))}
      </ol>
    );
  };

  return (
    <>
      <InputGroup className="mt-4 mb-4">
        <InputGroup.Prepend>
          <InputGroup.Text>Enter the installment amount</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder="Installment amount"
          aria-label="amount"
          type="number"
          onChange={installmentHandler}
        />
      </InputGroup>

      <InputGroup className="mt-4 mb-4">
        <InputGroup.Prepend>
          <InputGroup.Text>Enter the months</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder="Installment amount"
          aria-label="amount"
          type="number"
          onChange={monthHandler}
        />
      </InputGroup>
      <Button variant="primary" onClick={makeInstallmentArray}>
        Submit
      </Button>
      {monthlyInstallments()}
    </>
  );
};

export default Panel;
