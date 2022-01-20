import { Card } from '@twilio-paste/core';
import { NewItemFormContainer } from '../containers/NewItemFormContainer';
import { MenuItemsContainer } from '../containers/MenuItemsContainer';
import { TipSelectContainer } from '../containers/TipSelectContainer';
import { SummaryContainer } from '../containers/SummaryContainer';

const Calculator = () => {
  return (
    <Card>
      <NewItemFormContainer />
      <MenuItemsContainer />
      <TipSelectContainer />
      <SummaryContainer />
    </Card>
  );
};

export default Calculator;
