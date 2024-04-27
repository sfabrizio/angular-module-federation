import { loadRemoteEntry } from '@angular-architects/module-federation';

Promise.all([
  loadRemoteEntry({
    type: 'module',
    remoteEntry: 'http://localhost:4201/remoteEntry.js',
  }),
  loadRemoteEntry({
    type: 'module',
    remoteEntry: 'http://localhost:4003/remoteEntry.js',
  }),
])

import('./bootstrap')
	.catch(err => console.error(err));
