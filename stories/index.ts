import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { MyButtonComponent } from '../src/app/my-button/my-button.component';

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
      click: action('clicked'),
    },
  }));