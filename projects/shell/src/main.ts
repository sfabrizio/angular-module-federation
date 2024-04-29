import { loadManifest, loadRemoteEntry } from '@angular-architects/module-federation';

// old way, now we load from manifest file
// Promise.all([
//   loadRemoteEntry({
//     type: 'module',
//     remoteEntry: 'http://localhost:4201/remoteEntry.js',
//   }),
//   loadRemoteEntry({
//     type: 'module',
//     remoteEntry: 'http://localhost:4003/remoteEntry.js',
//   }),
// ])

loadManifest('assets/mf.manifest.json').then(() =>
import('./bootstrap')
	.catch(err => console.error(err))
	);
