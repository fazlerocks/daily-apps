import Vue from 'vue';
import {storiesOf} from '@storybook/vue';
import {action} from '@storybook/addon-actions';
import {
  withKnobs, text, array, select, boolean,
} from '@storybook/addon-knobs';

import DaInsanePost from '../src/components/DaInsanePost.vue';
import posts from '../src/posts.json';
import mdyDateFilter from '../src/common/mdyDateFilter';

// eslint-disable-next-line import/prefer-default-export
Vue.filter('mdyDate', mdyDateFilter);

storiesOf('DaInsanePost', module)
  .addDecorator(withKnobs)
  .add('select post', () => ({
    components: {DaInsanePost},
    template: '<da-insane-post :post="post"/>',
    props: {
      index: {
        default: select('post', posts.map((p, i) => i + 1), 1),
      },
    },
    computed: {
      post() {
        return posts[this.index - 1];
      },
    },
  }))
  .add('actions', () => ({
    components: {DaInsanePost},
    template: '<da-insane-post :post="post" @click="click" @bookmark="bookmark" @menu="menu" @publication="publication"/>',
    data() {
      return {
        post: posts[0],
      };
    },
    methods: {
      click: action('click'),
      bookmark: action('bookmark'),
      menu: action('menu'),
      publication: action('publication'),
    },
  }))
  .add('fully customized', () => ({
    components: {DaInsanePost},
    template: '<da-insane-post :post="post" :show-menu="showMenu" :menu-opened="menuOpened" :bookmarks-menu-opened="bookmarksMenuOpened" :show-comment-popup="showCommentPopup"/>',
    props: {
      title: {
        default: text('title', posts[0].title),
      },
      bookmarked: {
        default: boolean('bookmarked', posts[0].bookmarked),
      },
      showMenu: {
        default: boolean('show menu', true),
      },
      menuOpened: {
        default: boolean('menu opened', false),
      },
      bookmarksMenuOpened: {
        default: boolean('bookmarks menu opened', false),
      },
      read: {
        default: boolean('read', posts[0].read),
      },
      hasComments: {
        default: boolean('hasComments', false),
      },
      upvoted: {
        default: boolean('upvoted', false),
      },
      commented: {
        default: boolean('commented', false),
      },
      showCommentPopup: {
        default: boolean('show comment popup', false),
      },
    },
    computed: {
      post() {
        return {
          ...posts[0], title: this.title,
          bookmarked: this.bookmarked, read: this.read,
          numComments: this.hasComments, upvoted: this.upvoted,
          commented: this.commented,
        };
      },
    },
  }));
