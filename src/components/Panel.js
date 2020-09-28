import React, { useState } from "react";
// Import the components used from react bootstrap library
import { InputGroup, FormControl, Button, Card } from "react-bootstrap";

const Panel = () => {
  // Value from input of installment field
  const [installmentinput, setinstallmentinput] = useState(0);
  // Array to mantain the installments for a month
  const [installment, setInstallment] = useState([]);
  // Number of months for which installments will be paid
  const [months, setMonths] = useState(0);
  // A flag variable to display installment on click of submit button
  const [showinstallments, setshowinstallments] = useState(false);
  // Count variable for counting the current number of months
  const [count, setcount] = useState(0);
  // Amount paid at individual month
  const [amount, setamount] = useState(0);
  // Flag to show further installment instructions
  const [showInstallmentAdder, setshowInstallmentAdder] = useState(false);

  // Get installment value
  const installmentHandler = (event) => {
    if (event.target.value <= 0) {
      alert("Please enter a valid amount ");
    } else setinstallmentinput(event.target.value);
  };

  // Get months value
  const monthHandler = (event) => {
    if (event.target.value <= 0) {
      alert("Please enter the valid number of months ");
    } else setMonths(event.target.value);
  };

  // Make an array of installments by adding the values to installment array
  const makeInstallmentArray = () => {
    for (let i = 0; i < months; i++) {
      const installmentpermonth = installmentinput / months;
      setInstallment((installment) => installment.concat(installmentpermonth));
    }
  };

  // Add new installments
  const addtoNextInstallment = () => {
    let newarray = [...installment];
    let firstinstallment = installment[0];
    let secondinstallment = installment[1];
    newarray.splice(0, 2);
    setInstallment([
      Number(secondinstallment) + Number(firstinstallment) - Number(amount),
      ...newarray,
    ]);
    setshowInstallmentAdder(false);
  };

  const makeNewInstallment = () => {
    let newarray = [...installment];
    let firstinstallment = installment[0];
    newarray.splice(0, 1);
    setInstallment([firstinstallment - amount, ...newarray]);
    setshowInstallmentAdder(false);
  };

  // Handle the input amount and apply functionality accordingly

  // Display monthly installments on submit of values
  const monthlyInstallments = (count) => {
    return installment.map((element, count) => (
      <Card
        className="d-inline-block m-4"
        style={{ width: "18rem" }}
        key={count}
      >
        <Card.Body>
          <Card.Title>Amount for {count + 1} month</Card.Title>
          <Card.Text>You have to pay Rs.{element} for this month.</Card.Text>
          <InputGroup className="mt-3 mb-3">
            <FormControl
              placeholder="Enter the amount to be paid"
              onChange={(event) => {
                setamount(event.target.value);
              }}
              type="number"
            />
          </InputGroup>

          <Button
            variant="primary"
            onClick={() => {
              handleAmountInput(count);
            }}
          >
            Make payment
          </Button>
          {showInstallmentAdder && count == 0 ? (
            <>
              <Button
                className="d-block mx-auto mt-3"
                variant="success"
                onClick={addtoNextInstallment}
              >
                Add to next installment
              </Button>
              <Button
                className="d-block mx-auto mt-3"
                variant="warning"
                onClick={makeNewInstallment}
              >
                Make new installment
              </Button>
            </>
          ) : null}
        </Card.Body>
      </Card>
    ));
  };

  const handleAmountInput = (i) => {
    let arr = [...installment];
    if (arr[i] == amount) {
      arr.splice(i, 1);
      setInstallment(arr);
    } else if (arr[i] > amount) {
      setshowInstallmentAdder(true);
    } else if (arr[i] < amount) {
      let element1 = arr[0];
      let element2 = arr[1];
      arr.splice(0, 2);
      setInstallment([amount - element1 + element2, ...arr]);
    }
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
          placeholder="Number of months"
          aria-label="amount"
          type="number"
          onChange={monthHandler}
        />
      </InputGroup>
      <Button
        variant="primary"
        className="d-block mx-auto mb-4"
        onClick={() => {
          setcount(count + 1);
          makeInstallmentArray(count);
          setshowinstallments(true);
        }}
      >
        Submit
      </Button>
      {showinstallments ? monthlyInstallments() : null}
    </>
  );
};

export default Panel;
