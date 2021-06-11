import PanelItem from '../panel-item';
import { CarInterface, SelectEvent, UpdateEvent, url } from '../../shared';

class UpdatePanel extends PanelItem {
  private targetCarId: number | undefined;

  constructor() {
    super('update');

    this.nameSettings.element.disabled = true;
    this.nameSettings.element.setAttribute('placeholder', 'push select button');

    this.addListeners();
  }

  private makeActive(data: CarInterface) {
    this.nameSettings.element.value = data.name;
    this.colorSettings.element.value = data.color;

    this.nameSettings.element.disabled = false;
    this.btn.element.disabled = false;
  }

  private addListeners() {
    window.addEventListener(SelectEvent.eventName, async (event: CustomEventInit<string>) => {
      if (!event.detail) return;

      const targetCarInfo = await fetch(`${url}/${event.detail}`).then((response) => response.json());
      this.targetCarId = targetCarInfo.id;

      this.makeActive(targetCarInfo);
    });

    this.btn.element.addEventListener('click', async (event) => {
      event.preventDefault();

      const formData = new FormData(this.element);
      const data = {
        name: formData.get('name') as string,
        color: formData.get('color') as string,
      };

      await fetch(`${url}/${this.targetCarId}`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((response) => response.json());

      window.dispatchEvent(new UpdateEvent());
    });
  }
}

export default UpdatePanel;
