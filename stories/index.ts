import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { MyButtonComponent } from '../src/app/my-button/my-button.component';
import { TableComponentComponent } from '../src/app/table-component/table-component.component';

let data = {headers: ['monday','tuesday','wednesday','thursday','friday','saturday','sunday'], 
            data: [["Hoary marmot","Euro wallaby","Otter, canadian river","Marten, american","Blue crane", "Southern boubou,Arctic hare"],
            ["Gull, kelp","Tsessebe,Javanese cormorant", "Crowned hawk-eagle", "Deer, savannah", "Honey badger", "Green-winged macaw", "Little brown bat"],
            ["Four-striped grass mouse", "Crested screamer", "Legaan, ground", "Bottle-nose dolphin", "Pine snake (unidentified)", "Pied cormorant"]]};


storiesOf('My Button', module)
  .add('with some emoji', () => ({
    component: MyButtonComponent,
    props: {
      text: 'a button 💯',
    },

  }))
  .add('with some emoji and action', () => ({
    component: MyButtonComponent,
    props: {
      text: '😀 😎 👍 💯',
      click: action('button clicked'),
    },
  }));

storiesOf('Table', module)
  .add('custom data', () => ({
    component: TableComponentComponent,
    props: data
  }))

