import { component$} from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { BackNavigationMenu } from '~/components/navigation/back-navigation-menu';

export default component$(() => {
  return (
    <div class="flex flex-col p-12 w-full">
      <BackNavigationMenu title="Battles" />
      Battles
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Pokewar Battles - Pocket Monster Battleroyale',
  meta: [
    {
      name: 'description',
      content: 'Pokewar UI (Pocket Monster Battleroyale User Interface) for Web',
    },
  ],
};
