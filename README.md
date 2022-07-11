<p align="center"><a href="https://vueformulate.com" target="_blank" rel="noopener noreferrer"><img  width="100"  src="https://assets.wearebraid.com/vue-formulate/logo.png" alt="VueFormulate"></a></p>

### Vue Formulate Trim

Vue Formulate Trim allows for better string input formatting by allowing you to use `v-model.trim`.

### Install

```sh

npm install vue-formulate-trim

```

### Usage

Add to your vue formulate plugins.

[Documentation](https://vueformulate.com/guide/plugins/#creating-a-new-plugin)

```js

import Vue from 'vue'

import VueFormulate from '@braid/vue-formulate'

import FormulateVueTrimPlugin from 'vue-formulate-string'

Vue.use(VueFormulate, {
	plugins: [ FormulateVueTrimPlugin ]
})

```

For Nuxt.js ♥ add the plugin to your `formulate.config.js` file.

[Documentation](https://vueformulate.com/guide/installation/#nuxt)


### Component Usage

Add the trim type to a formulate component

```js

<FormulateInput type="trim"/>

```

#### Special Props : styling✨

The styling prop is optional and can be used to add in classes to your input. It accepts and array of classes or a string and will be combined with the formulate configuration classes set in your project.

> Duplicate classes are always removed.

```js

<FormulateInput type="trim" :styling="['border-2', 'border-blue-gray-200']"/>

```

or using a string...

```js

<FormulateInput type="trim" :styling="border-2 border-blue-gray-200"/>

```
