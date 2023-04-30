import { useEffect, useRef, useState } from "react";
import { Text, ScrollView } from "react-native";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header/index";
import { Keyboard } from "../../components/Keyboard";
import { styles } from "./styles";

export function Calculator() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");
  const [lastKeyPressed, setlastKeyPressed] = useState("C");
  const displayRef = useRef();

  const add = (firstNumber, secondNumber) => firstNumber + secondNumber;
  const subtract = (firstNumber, secondNumber) => firstNumber - secondNumber;
  const multiple = (firstNumber, secondNumber) => firstNumber * secondNumber;
  const divide = (firstNumber, secondNumber) => firstNumber / secondNumber;
  const equal = () => {
    setResult("");
    setExpression(result);
    setlastKeyPressed("=");
  };

  function removeLastValue() {
    const newExpression = expression.slice(0, -1);
    setExpression(newExpression);
    return newExpression;
  }

  function removeAllValues() {
    setExpression("");
    setResult("");
    return "";
  }

  const operators = [
    { key: "+", operation: add },
    { key: "−", operation: subtract },
    { key: "×", operation: multiple },
    { key: "÷", operation: divide },
    { key: "=", operation: equal },
  ];

  const actions = [
    { key: "⌫", action: removeLastValue },
    { key: "C", action: removeAllValues },
  ];

  const isAction = (key) => actions.some((action) => action.key === key);

  const isOperator = (key) =>
    operators.some((operator) => operator.key === key);

  const isMultiplicationOrDivisionOperator = (key) =>
    key === "×" || key === "÷";

  const getOperation = (operator) =>
    operators.find((targetOperator) => targetOperator.key === operator)
      .operation;

  function formatExpression(expression) {
    let formatedExpression = expression;

    if (formatedExpression.startsWith("−")) {
      formatedExpression = formatedExpression.replace("−", "0−");
    } else if (expression.startsWith("+")) {
      formatedExpression = formatedExpression.slice(1);
    }

    return formatedExpression
      .replace(/,/g, ".")
      .replace(/%/g, "÷100×")
      .replace("C", "")
      .replace("⌫", "");
  }

  function handleExpression(expression) {
    const regex = /[\+\−\×\÷]/g;

    const formatedExpression = formatExpression(expression);

    const numbersInExpression = formatedExpression.split(regex).map(parseFloat);
    const operatorsInExpression = formatedExpression.match(regex);

    if (numbersInExpression.length <= 1) {
      setResult("");
    }

    const lastValue = formatedExpression.slice(-1);
    if (
      numbersInExpression.length <= 1 ||
      expression === "" ||
      isOperator(lastValue)
    ) {
      return;
    }

    // Handle multiplication and division operators
    for (i = 0; i < operatorsInExpression.length; i++) {
      const operator = operatorsInExpression[i];

      if (isMultiplicationOrDivisionOperator(operator)) {
        const firstNumber = numbersInExpression[i];
        const secondNumber = numbersInExpression[i + 1];

        const operation = getOperation(operatorsInExpression[i]);
        const partialResult = operation(firstNumber, secondNumber);

        numbersInExpression.splice(i, 2, partialResult);
        operatorsInExpression.splice(i, 1);
        i--;
      }
    }

    // Handle rest operators
    let currentResult = numbersInExpression[0];
    operatorsInExpression.forEach((operatorInExpression, index) => {
      const nextNumber = numbersInExpression[index + 1];

      const operation = getOperation(operatorInExpression);
      currentResult = operation(currentResult, nextNumber);
    });

    if (currentResult === Infinity || isNaN(currentResult)) {
      setResult("Cálculo inválido");
      return;
    }
    const finalResult = currentResult.toString().replace(/\./g, ",");
    setResult(finalResult);
    setlastKeyPressed("");
  }

  function handleKeyPress(currentValue) {
    const lastValue = expression.length > 0 && expression.slice(-1);
    if (isOperator(lastValue) && isOperator(currentValue)) {
      return;
    }

    if (expression === "" && isMultiplicationOrDivisionOperator(currentValue)) {
      return;
    }

    if (currentValue === "=") {
      equal();
      return;
    }

    if (lastValue === "," && currentValue === ",") {
      return;
    }

    let newExpression = expression;
    if (expression === "" && currentValue === ",") {
      newExpression = "0" + currentValue;
    } else if (expression === "Cálculo inválido") {
      newExpression = currentValue;
    } else {
      newExpression += currentValue;
    }

    setExpression(newExpression);
    handleExpression(newExpression);

    if (isAction(currentValue)) {
      const action = actions.find(
        (action) => action.key === currentValue
      ).action;
      const _newExpression = action(newExpression);
      handleExpression(_newExpression);
    }
    setlastKeyPressed(currentValue);
  }

  useEffect(() => {
    displayRef.current.scrollToEnd();
  }, [expression, result]);

  return (
    <Container>
      <Header title={"Calculadora"} />
      <ScrollView
        ref={displayRef}
        contentContainerStyle={styles.display}
        showsHorizontalScrollIndicator={false}
        horizontal
      >
        <Text style={styles.result}>{result}</Text>
        <Text style={styles.operation}>{expression}</Text>
      </ScrollView>
      <Keyboard
        handleKeyPress={handleKeyPress}
        lastKeyPressed={lastKeyPressed}
        isEspecial={isOperator}
        isDefault={false}
      />
    </Container>
  );
}
