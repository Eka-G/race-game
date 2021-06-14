import PanelItem from '../panel-item';
import { CreateEvent } from '../../shared';

class CreatePanel extends PanelItem {
  constructor() {
    super('create');

    this.btn.element.addEventListener('click', (event) => {
      event.preventDefault();

      const formData = new FormData(this.element);
      const data = {
        name: formData.get('name') as string,
        color: formData.get('color') as string,
      };

      window.dispatchEvent(new CreateEvent(data, 0));
    });
  }
}

export default CreatePanel;
