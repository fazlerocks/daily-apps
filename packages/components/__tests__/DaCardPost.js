import { shallowMount } from '@vue/test-utils';
import '../src/filters';
import DaCardPost from '../src/components/DaCardPost.vue';
import posts from '../src/posts';

it('should emit bookmark event on click', () => {
  const post = posts[0];
  const wrapper = shallowMount(DaCardPost, { propsData: { post } });
  wrapper.find('.card__footer__bookmark').trigger('click');
  expect(wrapper.emitted().bookmark[0]).toEqual([{ post, bookmarked: true }]);
});

it('should emit menu event on click', () => {
  const post = posts[0];
  const wrapper = shallowMount(DaCardPost, { propsData: { post } });
  wrapper.find('.card__footer__menu').trigger('click');
  expect(wrapper.emitted().menu[0]).toEqual([{ post }]);
});

it('should set bookmark button title', () => {
  const post = posts[0];
  const wrapper = shallowMount(DaCardPost, { propsData: { post } });
  expect(wrapper.find('.card__footer__bookmark').element.title).toEqual('Bookmark');
});

it('should set bookmark button title when bookmarked', () => {
  const post = posts[1];
  const wrapper = shallowMount(DaCardPost, { propsData: { post } });
  expect(wrapper.find('.card__footer__bookmark').element.title).toEqual('Remove bookmark');
});

it('should set bookmarked class when bookmarked', () => {
  const post = posts[1];
  const wrapper = shallowMount(DaCardPost, { propsData: { post } });
  expect(wrapper.element.classList.contains('bookmarked')).toEqual(true);
});

it('should set tags title', () => {
  const post = posts[1];
  const wrapper = shallowMount(DaCardPost, { propsData: { post } });
  expect(wrapper.find('.card__tags').element.title).toEqual('#GraphQL, #Airbnb, #JavaScript, #FrontEndDevelopment');
});