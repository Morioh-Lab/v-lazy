# Lazy image loading directive for Vue.js

### Install

```
npm install @morioh/v-lazy
```

```js

import { createApp } from "vue";
import Lazy from '@morioh/v-lazy'

// global register
const app = createApp(App)  
  .use(store)
  .use(router)  
  .use(Lazy)
  .mount("#app");

```

```html
<img class="placeholder" v-lazy="https://unsplash.com/photos/al1bUu7EfAQ/download?force=true&w=1920">

```

