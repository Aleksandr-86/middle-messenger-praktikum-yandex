import './message-box.css';
import fn from './message-box.hbs';
import { Block } from 'core/Block';
import { store } from 'core/Store';

interface Props {
  userId: number;
  taken: boolean;
  time: string;
  content: string[];
}

export class MessageBox extends Block {
  static componentName = 'MessageBox';

  constructor(props: Props) {
    super({
      ...props,
      taken: props.userId !== store.get().user.id
    });
  }

  render() {
    return this.compile(fn, { ...this.props });
  }
}
