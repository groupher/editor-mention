import {
  make,
  INLINE_BLOCK_TAG,
  restoreDefaultInlineTools,
} from '@groupher/editor-utils'

import UI from './ui'
import './index.css'

/**
 * Mention Tool for the Editor.js
 *
 * Allows to wrap inline fragment and style it somehow.
 */
export default class Mention {
  /**
   * Specifies Tool as Inline Toolbar Tool
   *
   * @return {boolean}
   */
  static get isInline() {
    return true
  }

  /**
   * @param {{api: object}}  - Editor.js API
   */
  constructor({ api }) {
    this.api = api
    /**
     * Tag represented the term
     *
     * @type {string}
     */

    this.CSS = {
      // base: this.api.styles.inlineToolButton,
      // active: this.api.styles.inlineToolButtonActive,
      // mention
      mention: CSS.mention,
      mentionToolbarBlock: 'cdx-mention-toolbar-block',
      mentionContainer: 'cdx-mention__container',
      mentionInput: 'cdx-mention__input',
      mentionIntro: 'cdx-mention-suggestion__intro',
      mentionAvatar: 'cdx-mention-suggestion__avatar',
      mentionTitle: 'cdx-mention-suggestion__title',
      mentionDesc: 'cdx-mention-suggestion__desc',
      // tab
      tabWrapper: 'cdx-mention__tab',
      tabItem: 'cdx-mention__tab_item',
      tabItemActive: 'cdx-mention__tab_item_active',

      // suggestion
      suggestionContainer: 'cdx-mention-suggestion-wrapper',
      suggestion: 'cdx-mention-suggestion',
      // inline toolbar
      inlineToolBar: 'ce-inline-toolbar',
      inlineToolBarOpen: 'ce-inline-toolbar--showed',
      inlineToolbarButtons: 'ce-inline-toolbar__buttons',
    }

    this.ui = new UI({
      api,
    })
  }

  /**
   * Create button element for Toolbar
   * @ should not visible in toolbar, so return an empty div
   * @return {HTMLElement}
   */
  render() {
    const emptyEl = make('div', [this.CSS.mentionToolbarBlock], {})

    return emptyEl
  }

  /**
   * editor.js render actions
   *
   * @returns {HTMLElement}
   * @memberof Mention
   */
  renderActions() {
    // this.nodes.mentionInput.placeholder = '你想 @ 谁?'

    // return this.nodes.mention
    return this.ui.renderActions()
  }

  /**
   * NOTE:  inline tool must have this method
   *
   * @param {Range} range - selected fragment
   */
  surround(range) {}

  /**
   * Check and change Term's state for current selection
   */
  checkState(termTag) {
    console.log('mention checkState termTag anchorNode: ', termTag.anchorNode)
    // NOTE: if emoji is init after mention, then the restoreDefaultInlineTools should be called
    // otherwise restoreDefaultInlineTools should not be called, because the mention plugin
    // called first
    //
    // restoreDefaultInlineTools 是否调用和 mention / emoji 的初始化循序有关系，
    // 如果 mention 在 emoji 之前初始化了，那么 emoji 这里就不需要调用 restoreDefaultInlineTools,
    // 否则会导致 mention  无法正常显示。反之亦然。
    if (!termTag || termTag.anchorNode.id !== CSS.mention)
      return restoreDefaultInlineTools()

    if (termTag.anchorNode.id === CSS.mention) {
      return this.ui.handleMentionActions()
    }

    // normal inline tools
    return restoreDefaultInlineTools()
  }

  /**
   * Sanitizer rule
   * @return {{mark: {class: string}}}
   */
  static get sanitize() {
    return {
      [INLINE_BLOCK_TAG.mention]: {
        class: CSS.mention,
      },
    }
  }
}
