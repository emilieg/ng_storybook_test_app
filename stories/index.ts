import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { MyButtonComponent } from '../src/app/my-button/my-button.component';
import { TableComponentComponent } from '../src/app/table-component/table-component.component';
import { withNotes } from '@storybook/addon-notes';


//Note: was going to use this data to update the table with new data but was not able to update props with this input
let data = {headers: ['header1','header2','header3','header4','header5','header6','header7'], 
            data: [["Hoary marmot", "Euro wallaby", "Otter, canadian river", "Marten, american", "Blue crane", "Southern boubou,Arctic hare", "cat"],
            ["Gull, kelp","Tsessebe,Javanese cormorant", "Crowned hawk-eagle", "Deer, savannah", "Honey badger", "Green-winged macaw", "Little brown bat"],
            ["Four-striped grass mouse", "Crested screamer", "Legaan, ground", "Bottle-nose dolphin", "Pine snake (unidentified)", "Pied cormorant", "Dog"]]};


storiesOf('My Button', module)
  .add('with some emoji', () => ({
    component: MyButtonComponent,
    //WithNotes: 'here are some notes', //doesn't work
    props: {
      text: 'a button 💯',
      notes: withNotes('here are notes'), //doesn't work
    },
    

  }))
  .add('with some emoji and action', () => ({
    component: MyButtonComponent,
    props: {
      text: '😀 😎 👍 💯',
      click: action('click'), //doesn's work
    },
  }));

storiesOf('Table', module)
  .add('simple table', () => ({
    component: TableComponentComponent,
    props: {
      label: 'Updated Label',
      data: data
    }
  }))

  //Props: match the component @Input name to the prop key listed here

