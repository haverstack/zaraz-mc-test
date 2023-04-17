import { ComponentSettings, MCEvent, Manager } from '@managed-components/types';

export const onPageview = (event: MCEvent): void => {
  const { client } = event;
  client.execute("console.log(new Date());")
};

export default async function (manager: Manager, settings: ComponentSettings) {
  manager.addEventListener('pageview', onPageview);
};
