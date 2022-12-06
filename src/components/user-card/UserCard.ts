import { chatController } from 'controllers/ChatController';
import './user-card.css';
import fn from './user-card.hbs';
import { Block } from 'core/Block';
import emptySVG from 'assets/images/avatars/empty.svg';
import { PATH } from 'services/constants';

interface Props {
  imgSrc: string;
  login: string;
  displayName: string;
  id: number;
}

export class UserCard extends Block {
  static componentName = 'UserCard';

  constructor(props: Props) {
    super({
      src: () => {
        if (props.imgSrc === null) {
          return emptySVG;
        } else {
          return `${PATH.baseAvatarURL}${props.imgSrc}`;
        }
      },
      login: props.login,
      displayName: props.displayName,
      events: {
        click: async (e: MouseEvent) => {
          e.preventDefault();
          chatController.addUsersToChat([props.id]);
        }
      }
    });
  }

  render() {
    return this.compile(fn, { ...this.props });
  }
}
