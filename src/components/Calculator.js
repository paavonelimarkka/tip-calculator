import { Card } from '@twilio-paste/core';
import { NewItemFormContainer } from '../containers/NewItemFormContainer';
import { MenuItemsContainer } from '../containers/MenuItemsContainer';
import { TipSelectContainer } from '../containers/TipSelectContainer';

import { Summary } from './Summary';

const Calculator = () => {
  return (
    <Card>
      <NewItemFormContainer />
      <MenuItemsContainer />
      <TipSelectContainer />
      <Summary />
    </Card>
  );
};

export default Calculator;
