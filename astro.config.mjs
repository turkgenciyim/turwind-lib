import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import preact from '@astrojs/preact'
import { astroImageTools } from 'astro-imagetools'
import rehypePrettyCode from 'rehype-pretty-code'
import mdx from '@astrojs/mdx'

import json from './public/custom.json' assert { type: 'json' }

const prettyCodeOptions = {
  theme: json,
  // onVisitLine (node) {
  //   if (node.children.length === 0) {
  //     node.children = [
  //       {
  //         type: 'text',
  //         value: ' '
  //       }
  //     ]
  //   }
  // },
  // onVisitHighlightedLine (node) {
  //   node.properties.className.push('highlighted')
  // },
  // onVisitHighlightedWord (node) {
  //   node.properties.className = ['word']
  // },
  // tokensMap: {}
}

// https://astro.build/config
export default defineConfig({
  experimental: {
    optimizeHoistedScript: true
  },
  integrations: [
    tailwind({
      applyBaseStyles: false
    }),
    preact(),
    mdx(),
    astroImageTools
  ],
  markdown: {
    // extendDefaultPlugins: true,
    syntaxHighlight: false,
    rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]]
  }
})
