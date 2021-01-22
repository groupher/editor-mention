import {
  make,
  debounce,
  moveCaretToEnd,
  keepCustomInlineToolOnly,
  removeElementByClass,
  convertElementToTextIfNeed,
} from '@groupher/editor-utils'

import './index.css'

/**
 * Mention Tool for the Editor.js
 *
 * Allows to wrap inline fragment and style it somehow.
 */
export default class UI {
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

    this.nodes = {
      mention: make('div', this.CSS.mentionContainer),
      suggestions: make('div', this.CSS.suggestionContainer),
      tab: make('div', this.CSS.tabWrapper),
      mentionInput: make('input', this.CSS.mentionInput, {
        autofocus: true,
        placeholder: '你想 @ 谁？',
      }),
    }

    const TabItemEl = make('div', [this.CSS.tabItem, this.CSS.tabItemActive], {
      innerHTML: '用户',
    })
    const TabItem2El = make('div', this.CSS.tabItem, {
      innerHTML: '帖子',
    })

    this.nodes.tab.appendChild(TabItemEl)
    this.nodes.tab.appendChild(TabItem2El)

    this.nodes.mentionInput.addEventListener('focus', () => {
      const mentionEl = document.querySelector('#' + this.CSS.mention)

      if (mentionEl) {
        const mentionCursorHolder = make('span', CSS.focusHolder)
        mentionEl.parentNode.insertBefore(
          mentionCursorHolder,
          mentionEl.nextSibling,
        )
      }
    })

    /**
     * should clear anchors after user manually click outside the popover,
     * otherwise will confuse the next insert
     *
     * 用户手动点击其他位置造成失焦以后，如果没有输入的话需要清理 anchors，
     * 否则会造成下次插入 mention 的时候定位异常
     *
     * @return {void}
     */
    this.nodes.mentionInput.addEventListener('blur', () => {
      setTimeout(() => {
        console.log(
          'this.mentionInput on blur: ',
          this.nodes.mentionInput.value,
        )
        const mentionEl = document.querySelector('#' + this.CSS.mention)
        console.log('blurred: ', mentionEl)

        if (this.nodes.mentionInput.value.trim() === '') {
          this._cleanUp()
        }
      }, 300)
    }) // blur end

    this.nodes.mention.appendChild(this.nodes.tab)
    this.nodes.mention.appendChild(this.nodes.mentionInput)
    this.nodes.mention.appendChild(this.nodes.suggestions)

    this.nodes.mentionInput.addEventListener(
      'keyup',
      debounce(this._handleInput.bind(this), 200),
    )
  }

  /**
   * editor.js render actions
   *
   * @returns {HTMLElement}
   * @memberof Mention
   */
  renderActions() {
    return this.nodes.mention
  }

  /**
   * show mention suggestions, hide normal actions like bold, italic etc...inline-toolbar buttons
   * 隐藏正常的 粗体，斜体等等 inline-toolbar 按钮，这里是借用了自带 popover 的一个 hack
   */
  handleMentionActions() {
    keepCustomInlineToolOnly('mention')

    this.clearSuggestions()
    this.nodes.mentionInput.value = ''

    setTimeout(() => this.nodes.mentionInput.focus(), 100)
  }

  // clear suggestions list
  clearSuggestions() {
    console.log('clearSuggestions')
    const node = document.querySelector('.' + this.CSS.suggestionContainer)

    while (node.firstChild) {
      node.removeChild(node.firstChild)
    }
  }

  /**
   * handle mention input
   *
   * @return {void}
   */
  _handleInput(ev) {
    if (ev.code === 'Backspace' && this.nodes.mentionInput.value === '') {
      this._cleanUp()
      return
    }
    if (ev.code === 'Escape') {
      // clear the mention input and close the toolbar
      this.nodes.mentionInput.value = ''
      this._cleanUp()
      return
    }

    if (ev.code === 'Enter') {
      return console.log('select first item')
    }

    const user = {
      id: 1,
      title: 'mydaerxym',
      desc: '摩托旅行爱好者',
      avatar: 'https://cps-oss.oss-cn-shanghai.aliyuncs.com/test.jpg',
    }

    const suggestion = this._drawSuggestion(user)

    this.nodes.suggestions.appendChild(suggestion)
  }

  /**
   * generate suggestion block
   *
   * @return {HTMLElement}
   */
  _drawSuggestion(user) {
    // TODO: not use document?
    const mentionEl = document.querySelector('#' + this.CSS.mention)
    const suggestionWrapper = make('div', [this.CSS.suggestion], {})

    const avatar = make('img', [this.CSS.mentionAvatar], {
      src: user.avatar,
    })

    const intro = make('div', [this.CSS.mentionIntro], {})
    const title = make('div', [this.CSS.mentionTitle], {
      innerText: user.title,
    })
    const desc = make('div', [this.CSS.mentionDesc], {
      innerText: user.desc,
    })

    suggestionWrapper.appendChild(avatar)
    intro.appendChild(title)
    intro.appendChild(desc)
    suggestionWrapper.appendChild(intro)

    suggestionWrapper.addEventListener('click', () => {
      this.nodes.mentionInput.value = user.title
      mentionEl.innerHTML = user.title
      this._cleanUp()
    })

    // https://avatars0.githubusercontent.com/u/6184465?s=40&v=4

    return suggestionWrapper
  }

  /**
   * close the mention popover, then focus to mention holder
   *
   * @return {void}
   */
  _cleanUp() {
    const mentionEl = document.querySelector('#' + this.CSS.mention)
    if (!mentionEl) return

    // empty the mention input
    this._clearSuggestions()

    // closePopover
    const inlineToolBar = document.querySelector('.' + this.CSS.inlineToolBar)
    // this.api.toolbar.close is not work
    // so close the toolbar by remove the open class manually
    // this.api.toolbar.close()
    inlineToolBar.classList.remove(this.CSS.inlineToolBarOpen)

    // move caret to end of the current mention
    if (mentionEl.nextElementSibling) {
      moveCaretToEnd(mentionEl.nextElementSibling)
    }

    // mention holder id should be uniq
    // 在 moveCaret 定位以后才可以删除，否则定位会失败
    setTimeout(() => {
      this._removeAllHolderIds()
      removeElementByClass(CSS.focusHolder)
      convertElementToTextIfNeed(mentionEl, this.nodes.mentionInput)
    }, 50)
  }

  // clear suggestions list
  _clearSuggestions() {
    console.log('clearSuggestions')
    const node = document.querySelector('.' + this.CSS.suggestionContainer)

    while (node.firstChild) {
      node.removeChild(node.firstChild)
    }
  }

  // 删除所有 mention-holder 的 id， 因为 closePopover 无法处理失焦后
  // 自动隐藏的情况
  _removeAllHolderIds() {
    const holders = document.querySelectorAll('.' + this.CSS.mention)

    holders.forEach((item) => item.removeAttribute('id'))

    return false
  }
}
