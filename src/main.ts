import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app';
import { environment as env } from './environments/environment';

if (env.prod) enableProdMode();

platformBrowserDynamic()
.bootstrapModule(AppModule)
.catch(err => console.error(err));