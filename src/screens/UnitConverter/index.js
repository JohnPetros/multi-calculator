import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { Container } from '../../components/Container';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Keyboard } from '../../components/Keyboard';
import { measures } from '../../utils/measures';
import { Convert } from 'easy-currencies';
import convert from 'convert-units';

export function UnitConverter({ route }) {
  const [units, setUnits] = useState([]);
  const [fromUnit, setFromUnit] = useState({});
  const [toUnit, setToUnit] = useState({});
  const [lastKeyPressed, setLastKeyPressed] = useState('C');
  const measureName = route.params?.measureName;

  function updateUnit(setUnit, prop, data) {
    setUnit((unit) => ({ ...unit, [prop]: data }));
  }

  function removeLastValue() {
    const { unit, setter } = stateUnits.find(
      (stateUnit) => stateUnit.unit.isSelected
    );
    const currentValue = unit.value.slice(0, -1);
    const newValue = currentValue === '' ? '0' : currentValue;
    updateUnit(setter, 'value', newValue);
    convertUnit(newValue.replace(',', '.'));
  }

  function removeAllValues() {
    stateUnits.forEach(({ setter }) => {
      updateUnit(setter, 'value', '0');
    });
    convertUnit(0);
  }

  function exchangeInputSelection() {
    stateUnits.forEach(({ unit, setter }) => {
      const isSelected = !unit.isSelected;
      updateUnit(setter, 'isSelected', isSelected);
    });
  }

  function convertSelectedUnit() {
    const { unit } = stateUnits.find(({ unit }) => unit.isSelected);
    convertUnit(formatValue(unit.value.replace(',', '.')));
  }

  function formatValue(value) {
    return value.toString().replace('.', ',');
  }

  async function convertUnit(value) {
    const from = stateUnits.find(({ unit }) => unit.isSelected);
    const to = stateUnits.find(({ unit }) => !unit.isSelected);
    const isCurrency = measureName === 'currency';

    let conversion = 0;
    if (isCurrency) {
      conversion = await Convert(+value)
        .from(from.unit.abbr)
        .to(to.unit.abbr);
    } else {
      conversion = convert(+value)
        .from(from.unit.abbr)
        .to(to.unit.abbr);
    }

    // console.log({ conversion });
    updateUnit(
      to.setter,
      'value',
      formatValue(isCurrency ? conversion.toFixed(2) : conversion)
    );
  }

  function handleKeyPress(value) {
    setLastKeyPressed(value);
    if (isAction(value)) {
      const action = actions.find((action) => action.key === value).action;
      action();
      return;
    }

    const { unit, setter } = stateUnits.find(({ unit }) => unit.isSelected);

    if (unit.value.includes(',') && value === ',') {
      return;
    }

    let newValue = '';
    if (unit.value === '0') {
      newValue = value === ',' ? '0' + value : value;
    } else {
      newValue = unit.value + value;
    }

    updateUnit(setter, 'value', newValue);
    convertUnit(newValue.replace(',', '.'));
  }

  const stateUnits = [
    { unit: fromUnit, setter: setFromUnit },
    { unit: toUnit, setter: setToUnit },
  ];

  const actions = [
    { key: '⌫', action: removeLastValue },
    { key: 'C', action: removeAllValues },
    { key: '⇵', action: exchangeInputSelection },
    { key: '=', action: convertSelectedUnit },
  ];

  const isAction = (key) => actions.some((action) => action.key === key);

  useEffect(() => {
    const units = measures.find(
      (measure) => measure.name === measureName
    ).units;

    setUnits(units);
    setFromUnit({
      name: units[0].name,
      abbr: units[0].abbr,
      value: '0',
      isSelected: true,
    });
    setToUnit({
      name: units[1].name,
      abbr: units[1].abbr,
      value: '0',
      isSelected: false,
    });
  }, []);

  useEffect(() => {
    if (fromUnit.abbr && toUnit.abbr) {
      convertSelectedUnit();
    }
  }, [fromUnit.abbr, toUnit.abbr]);

  return (
    <Container>
      <Header title={`Conversor de ${route.params?.title}`} />

      <Input
        units={units}
        currentUnit={fromUnit}
        setCurrentUnit={setFromUnit}
        exchangeInputSelection={exchangeInputSelection}
      />
      <Input
        units={units}
        currentUnit={toUnit}
        setCurrentUnit={setToUnit}
        exchangeInputSelection={exchangeInputSelection}
      />

      <Keyboard
        handleKeyPress={handleKeyPress}
        lastKeyPressed={lastKeyPressed}
        isEspecial={isAction}
      />
    </Container>
  );
}
