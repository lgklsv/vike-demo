import Layout from '../layouts/LayoutDefault';
import vikeReactQuery from 'vike-react-query/config';
import vikeReact from 'vike-react/config';
import type { Config } from 'vike/types';

// Default config (can be overridden by pages)
// https://vike.dev/config

export default {
  // https://vike.dev/Layout
  Layout,

  // https://vike.dev/head-tags
  title: 'Vike demo',
  description: 'Vike demo',

  stream: 'web',
  extends: [vikeReact, vikeReactQuery],
} satisfies Config;
